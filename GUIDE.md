# Guida all'Aggiornamento dei Contenuti del Sito Web / Website Content Update Guide

## 🇮🇹 Italiano

### Indice
1. [Prerequisiti](#prerequisiti-it)
2. [Aggiornamento delle Traduzioni](#aggiornamento-delle-traduzioni)
3. [Gestione dei Progetti](#gestione-dei-progetti)
4. [Modifica delle Immagini](#modifica-delle-immagini)
5. [Pubblicazione delle Modifiche](#pubblicazione-delle-modifiche)

---

### Prerequisiti {#prerequisiti-it}

Per aggiornare i contenuti del sito web avrai bisogno di:
- Un editor di testo (consigliato: VS Code, Sublime Text, o anche Blocco Note)
- Accesso ai file del progetto
- Conoscenza base della sintassi Markdown (molto semplice!)

### Aggiornamento delle Traduzioni

I testi del sito sono organizzati in file di traduzione separati per italiano e inglese.

#### Dove Trovare i Testi

**File di traduzione italiano:** `src/i18n/it.ts`
**File di traduzione inglese:** `src/i18n/en.ts`

#### Come Modificare i Testi

1. Apri il file corrispondente alla lingua che vuoi modificare
2. Trova la sezione che vuoi aggiornare
3. Modifica il testo tra virgolette `""`
4. Salva il file

**⚠️ IMPORTANTE:** Modifica SEMPRE entrambi i file (it.ts e en.ts) per mantenere il sito bilingue coerente.

---

### Gestione dei Progetti

I progetti sono organizzati con immagini condivise e file Markdown separati per lingua.

#### Struttura dei Progetti

```
src/content/projects/
├── _images/                     # Immagini condivise (usate da IT e EN)
│   └── nome-progetto/
│       └── cover.webp          # Immagine di copertina
├── it/                          # Progetti in italiano
│   └── nome-progetto.md        # File con i dettagli
└── en/                          # Progetti in inglese
    └── project-name.md         # File con i dettagli
```

**⚠️ IMPORTANTE:** Le immagini sono condivise tra italiano e inglese. Una sola immagine in `_images/` viene usata da entrambe le lingue. Questo riduce lo spazio e semplifica la gestione.

#### Creare un Nuovo Progetto

**Passo 1: Preparare l'Immagine**
1. Ottimizza la tua immagine (max 1920px di larghezza)
2. Converti in formato WebP (usa strumenti online come squoosh.app)
3. Rinomina in `cover.webp`

**Passo 2: Creare la Cartella Immagine Condivisa**
```bash
mkdir -p src/content/projects/_images/nome-del-progetto
```

**Passo 3: Aggiungere l'Immagine**
- Copia `cover.webp` nella cartella `_images/nome-del-progetto/`

**Passo 4: Creare i File Markdown**

**File italiano** (`src/content/projects/it/nome-del-progetto.md`):
```markdown
---
title: "Titolo del Progetto"
description: "Breve descrizione del progetto (appare nella card)"
location: "Città, Provincia"
year: 2024
category: "commercial"  # Opzioni: residential, commercial, renovation, mixed-use
coverImage: "../_images/nome-del-progetto/cover.webp"
specs:
  area: "500 mq"
  duration: "12 mesi"
  client: "Nome Cliente"
  features:
    - "Caratteristica 1"
    - "Caratteristica 2"
featured: false
order: 1  # Numero d'ordine (più basso = appare prima)
---

# Titolo del Progetto

Descrizione dettagliata del progetto. Puoi usare **grassetto**, *corsivo*, e altri formati Markdown.

## Sfide Tecniche

Descrivi le sfide affrontate...

## Soluzioni Implementate

Descrivi le soluzioni adottate...
```

**File inglese** (`src/content/projects/en/project-name.md`):
- Crea lo stesso file ma con i testi tradotti in inglese
- Usa lo stesso percorso immagine: `coverImage: "../_images/nome-del-progetto/cover.webp"`

#### Modificare un Progetto Esistente

1. Trova il file `.md` del progetto in `src/content/projects/it/` o `/en/`
2. Apri il file con un editor di testo
3. Modifica i campi o il contenuto
4. Salva il file

**Per cambiare l'immagine:**
1. Sostituisci il file in `src/content/projects/_images/nome-progetto/cover.webp`
2. Il cambiamento si applicherà automaticamente a entrambe le lingue

#### Eliminare un Progetto

1. Elimina il file markdown italiano: `src/content/projects/it/nome-progetto.md`
2. Elimina il file markdown inglese: `src/content/projects/en/project-name.md`
3. Elimina la cartella immagine condivisa: `src/content/projects/_images/nome-progetto/`

---

### Modifica delle Immagini

#### Immagini dei Progetti

Tutte le immagini dei progetti sono in `src/content/projects/_images/`.

Per sostituire un'immagine di progetto:
1. Prepara la nuova immagine (max 1920px, formato WebP)
2. Sostituisci il file in `_images/nome-progetto/cover.webp`
3. Salva - il cambiamento si applica a entrambe le lingue automaticamente

#### Ottimizzazione delle Immagini

**Raccomandazioni:**
- Usa formato WebP (migliore compressione)
- Dimensione massima: 1920px di larghezza
- Qualità: 80-85%
- Strumenti consigliati: [Squoosh](https://squoosh.app/), [TinyPNG](https://tinypng.com/)

---

### Pubblicazione delle Modifiche

Dopo aver apportato le modifiche:

#### 1. Verifica Locale
```bash
npm run build
npm run preview
```

#### 2. Salva le Modifiche (Git)
```bash
git add .
git commit -m "Aggiorna contenuti: [descrivi le modifiche]"
git push
```

---

## 🇬🇧 English

### Table of Contents
1. [Prerequisites](#prerequisites-en)
2. [Updating Translations](#updating-translations-en)
3. [Managing Projects](#managing-projects-en)
4. [Changing Images](#changing-images-en)
5. [Publishing Changes](#publishing-changes-en)

---

### Prerequisites {#prerequisites-en}

To update website content you'll need:
- A text editor (recommended: VS Code, Sublime Text, or Notepad)
- Access to the project files
- Basic knowledge of Markdown syntax (very simple!)

### Updating Translations {#updating-translations-en}

The site's texts are organized in separate translation files for Italian and English.

**Italian translation file:** `src/i18n/it.ts`
**English translation file:** `src/i18n/en.ts`

**⚠️ IMPORTANT:** ALWAYS edit BOTH files (it.ts and en.ts) to keep the bilingual site consistent.

---

### Managing Projects {#managing-projects-en}

Projects are organized with shared images and separate Markdown files per language.

#### Project Structure

```
src/content/projects/
├── _images/                     # Shared images (used by IT and EN)
│   └── project-name/
│       └── cover.webp          # Cover image
├── it/                          # Italian projects
│   └── project-name.md         # Details file
└── en/                          # English projects
    └── project-name.md         # Details file
```

**⚠️ IMPORTANT:** Images are shared between Italian and English. One single image in `_images/` is used by both languages. This saves space and simplifies management.

#### Creating a New Project

**Step 1: Prepare the Image**
1. Optimize your image (max 1920px width)
2. Convert to WebP format (use online tools like squoosh.app)
3. Rename to `cover.webp`

**Step 2: Create the Shared Image Folder**
```bash
mkdir -p src/content/projects/_images/project-name
```

**Step 3: Add the Image**
- Copy `cover.webp` to the `_images/project-name/` folder

**Step 4: Create Markdown Files**

**Italian file** (`src/content/projects/it/project-name.md`):
```markdown
---
title: "Project Title"
description: "Brief project description (appears on card)"
location: "City, Province"
year: 2024
category: "commercial"  # Options: residential, commercial, renovation, mixed-use
coverImage: "../_images/project-name/cover.webp"
specs:
  area: "500 sqm"
  duration: "12 months"
  client: "Client Name"
  features:
    - "Feature 1"
    - "Feature 2"
featured: false
order: 1  # Order number (lower = appears first)
---

# Project Title

Detailed project description...
```

**English file** (`src/content/projects/en/project-name.md`):
- Create the same file with English translations
- Use the same image path: `coverImage: "../_images/project-name/cover.webp"`

#### Editing an Existing Project

1. Find the project's `.md` file in `src/content/projects/it/` or `/en/`
2. Open the file with a text editor
3. Edit the fields or content
4. Save the file

**To change the image:**
1. Replace the file at `src/content/projects/_images/project-name/cover.webp`
2. The change applies automatically to both languages

#### Deleting a Project

1. Delete the Italian markdown file: `src/content/projects/it/project-name.md`
2. Delete the English markdown file: `src/content/projects/en/project-name.md`
3. Delete the shared image folder: `src/content/projects/_images/project-name/`

---

### Changing Images {#changing-images-en}

#### Project Images

All project images are in `src/content/projects/_images/`.

To replace a project image:
1. Prepare the new image (max 1920px, WebP format)
2. Replace the file at `_images/project-name/cover.webp`
3. Save - the change applies to both languages automatically

#### Image Optimization

**Recommendations:**
- Use WebP format (better compression)
- Maximum size: 1920px width
- Quality: 80-85%
- Recommended tools: [Squoosh](https://squoosh.app/), [TinyPNG](https://tinypng.com/)

---

### Publishing Changes {#publishing-changes-en}

After making changes:

#### 1. Local Verification
```bash
npm run build
npm run preview
```

#### 2. Save Changes (Git)
```bash
git add .
git commit -m "Update content: [describe changes]"
git push
```

---

## 📝 Quick Reference / Riferimento Rapido

### File Paths / Percorsi File

| Content Type | Path |
|-------------|------|
| Italian translations / Traduzioni italiane | `src/i18n/it.ts` |
| English translations / Traduzioni inglesi | `src/i18n/en.ts` |
| Italian projects / Progetti italiani | `src/content/projects/it/` |
| English projects / Progetti inglesi | `src/content/projects/en/` |
| **Shared images / Immagini condivise** | `src/content/projects/_images/` |
| Logo | `public/img/logo.png` |

### Common Commands / Comandi Comuni

```bash
# Start development / Sviluppo
npm run dev

# Build / Compila
npm run build

# Preview / Anteprima
npm run preview
```

---

## ✅ Key Benefits of Shared Images / Vantaggi delle Immagini Condivise

- **50% less storage** / 50% meno spazio (7.5MB invece di 15MB)
- **Easier management** / Gestione più semplice (un'immagine, non due)
- **Consistent across languages** / Coerente tra le lingue
- **Faster builds** / Compilazione più veloce
