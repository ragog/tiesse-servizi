#!/usr/bin/env node
// Visual regression check for the Tiesse Group site.
// Builds the site, serves dist/ on a temporary port, then captures
// every page on every key viewport. Flags pages with horizontal overflow.
//
// Usage:  node scripts/visual-check.mjs
//   ENV:  BASE_URL=https://tiesse-group.com node scripts/visual-check.mjs   (test prod)
//         OUT=/tmp/foo node scripts/visual-check.mjs                         (custom output dir)

import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = process.env.OUT || '/tmp/tiesse-visual-check';
const BASE_URL = process.env.BASE_URL;

const VIEWPORTS = [
  { name: 'galaxy-s21',     width: 360,  height: 800,  scale: 3 },
  { name: 'iphone-se',      width: 375,  height: 667,  scale: 2 },
  { name: 'iphone-14',      width: 390,  height: 844,  scale: 3 },
  { name: 'iphone-14-pm',   width: 430,  height: 932,  scale: 3 },
  { name: 'ipad-portrait',  width: 768,  height: 1024, scale: 2 },
  { name: 'ipad-landscape', width: 1024, height: 768,  scale: 2 },
  { name: 'laptop',         width: 1280, height: 800,  scale: 2 },
  { name: 'desktop',        width: 1440, height: 900,  scale: 1 },
];

const PAGES = [
  { name: 'home-en',       path: '/' },
  { name: 'home-it',       path: '/it/' },
  { name: 'projects-en',   path: '/en/projects/' },
  { name: 'projects-it',   path: '/progetti/' },
  { name: 'realestate-en', path: '/en/real-estate/' },
  { name: 'realestate-it', path: '/real-estate/' },
  { name: 'sardinia-en',   path: '/en/real-estate/sardinia/' },
  { name: 'sardegna-it',   path: '/real-estate/sardegna/' },
];

function serveDist() {
  const dist = path.join(ROOT, 'dist');
  if (!fs.existsSync(dist)) {
    console.error(`dist/ not found at ${dist} - run "npm run build" first.`);
    process.exit(1);
  }
  return new Promise((resolve) => {
    const types = {
      '.html':'text/html', '.css':'text/css', '.js':'application/javascript',
      '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png',
      '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp',
      '.ico':'image/x-icon', '.woff2':'font/woff2', '.woff':'font/woff',
    };
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      let file = path.join(dist, p);
      if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html';
      if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
        res.writeHead(404); res.end('not found'); return;
      }
      res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

async function run() {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  let base = BASE_URL;
  let server;
  if (!base) {
    console.log('Building site...');
    const build = spawnSync('npm', ['run', 'build'], { cwd: ROOT, stdio: 'inherit' });
    if (build.status !== 0) process.exit(build.status);
    const s = await serveDist();
    server = s.server;
    base = `http://127.0.0.1:${s.port}`;
    console.log(`Serving dist/ at ${base}`);
  } else {
    console.log(`Testing against ${base}`);
  }

  const browser = await chromium.launch();
  const findings = [];
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.scale,
    });
    const page = await ctx.newPage();
    for (const p of PAGES) {
      const url = base + p.path;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (e) {
        findings.push({ vp: vp.name, page: p.name, kind: 'load-error', detail: e.message });
        continue;
      }
      const overflow = await page.evaluate(() => {
        const html = document.documentElement;
        const offenders = [];
        const all = document.querySelectorAll('*');
        for (const el of all) {
          if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) {
            const rect = el.getBoundingClientRect();
            if (rect.right > window.innerWidth + 1) {
              offenders.push({
                tag: el.tagName.toLowerCase(),
                cls: (el.className || '').toString().slice(0, 80),
                text: (el.innerText || '').slice(0, 60),
                right: Math.round(rect.right),
                viewport: window.innerWidth,
              });
              if (offenders.length >= 5) break;
            }
          }
        }
        return {
          docScrollWidth: html.scrollWidth,
          innerWidth: window.innerWidth,
          horizontalOverflow: html.scrollWidth > window.innerWidth + 1,
          offenders,
        };
      });
      const file = path.join(OUT, `${vp.name}_${p.name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      if (overflow.horizontalOverflow) {
        findings.push({
          vp: vp.name, page: p.name, kind: 'overflow',
          docScrollWidth: overflow.docScrollWidth,
          innerWidth: overflow.innerWidth,
          offenders: overflow.offenders,
          screenshot: file,
        });
      }
      process.stdout.write(overflow.horizontalOverflow ? '!' : '.');
    }
    await ctx.close();
    process.stdout.write(` ${vp.name}\n`);
  }
  await browser.close();
  if (server) server.close();

  const reportPath = path.join(OUT, 'report.json');
  fs.writeFileSync(reportPath, JSON.stringify({ base, findings }, null, 2));

  console.log(`\nScreenshots: ${OUT}`);
  console.log(`Report:      ${reportPath}`);
  if (findings.length === 0) {
    console.log('\nOK - no horizontal overflow on any page/viewport.');
  } else {
    console.log(`\nProblems on ${findings.length} page+viewport combinations:`);
    for (const f of findings) {
      console.log(`  [${f.vp} / ${f.page}] ${f.kind}` +
        (f.docScrollWidth ? ` (${f.docScrollWidth}px > ${f.innerWidth}px)` : ''));
      for (const o of (f.offenders || []).slice(0, 2)) {
        console.log(`     <${o.tag} class="${o.cls}"> "${o.text.replace(/\s+/g,' ')}"`);
      }
    }
    process.exitCode = 1;
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
