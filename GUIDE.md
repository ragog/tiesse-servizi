# Guida all'Aggiornamento dei Contenuti del Sito Web / Website Content Update Guide

## 🇮🇹 Italiano

### Indice
1. [Prerequisiti](#prerequisiti-it)
2. [Aggiornamento delle Traduzioni](#aggiornamento-delle-traduzioni)
3. [Gestione dei Progetti](#gestione-dei-progetti)
4. [Modifica delle Immagini](#modifica-delle-immagini)
5. [Pubblicazione delle Modifiche](#pubblicazione-delle-modifiche)
6. [Risoluzione dei Problemi](#risoluzione-dei-problemi)

---

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

**Esempio - Modificare il titolo della homepage:**

```typescript
// In src/i18n/it.ts
export const it = {
  site_title: "Tiesse Servizi", // Cambia questo testo
  site_description: "Eccellenza nell'ingegneria...", // O questo
  // ...
}
```

#### Sezioni Principali

**Hero (Sezione iniziale)**
```typescript
hero: {
  title: "Il tuo titolo principale",
  subtitle: "Il tuo sottotitolo",
  cta: "Testo del pulsante"
}
```

**Chi Siamo**
```typescript
about: {
  title: "Chi Siamo",
  description: "Descrizione della tua azienda...",
  vision_title: "La Nostra Visione",
  vision_text: "Testo della visione..."
}
```

**Servizi**
```typescript
services: {
  title: "Servizi Tecnici",
  service1_title: "Nome del servizio",
  service1_description: "Descrizione del servizio"
}
```

**Footer**
```typescript
footer: {
  email_value: "info@tiesseservizi.eu",
  partita_iva_value: "02241091202",
  sede_value: "Via Loderingo degli Andalò 5, 40124 Bologna"
}
```

**⚠️ IMPORTANTE:** Modifica SEMPRE entrambi i file (it.ts e en.ts) per mantenere il sito bilingue coerente.

---

### Gestione dei Progetti

I progetti sono organizzati in cartelle separate per lingua e utilizzano file Markdown.

#### Struttura dei Progetti

```
src/content/projects/
├── it/                          # Progetti in italiano
│   ├── nome-progetto/
│   │   └── cover.webp          # Immagine di copertina
│   └── nome-progetto.md        # File con i dettagli
└── en/                          # Progetti in inglese
    ├── project-name/
    │   └── cover.webp
    └── project-name.md
```

#### Modificare un Progetto Esistente

1. Trova il file `.md` del progetto in `src/content/projects/it/` o `/en/`
2. Apri il file con un editor di testo
3. Modifica i campi tra i `---` (frontmatter) o il contenuto sotto
4. Salva il file

**Campi Modificabili:**
- `title`: Titolo del progetto
- `description`: Descrizione breve (max 150 caratteri)
- `location`: Luogo del progetto
- `year`: Anno di completamento
- `category`: Categoria (residential, commercial, renovation, mixed-use)
- `specs.area`: Superficie
- `specs.duration`: Durata lavori
- `specs.client`: Nome cliente
- `specs.features`: Lista caratteristiche
- `order`: Ordine di visualizzazione (numero più basso = appare prima)
- `featured`: true/false (se evidenziare il progetto)

#### Eliminare un Progetto

1. Elimina la cartella del progetto: `src/content/projects/it/nome-progetto/`
2. Elimina il file markdown: `src/content/projects/it/nome-progetto.md`
3. Ripeti per la versione inglese in `/en/`

---

### Modifica delle Immagini

#### Immagini Principali del Sito

Le immagini principali sono in `public/img/`:
- `logo.png` - Logo aziendale
- Altri asset grafici

Per sostituire un'immagine:
1. Prepara la nuova immagine con lo **stesso nome** del file originale
2. Sostituisci il file in `public/img/`
3. Ricostruisci il sito

#### Immagini dei Progetti

Vedi la sezione "Gestione dei Progetti" sopra.

#### Ottimizzazione delle Immagini

**Raccomandazioni:**
- Usa formato WebP quando possibile (migliore compressione)
- Dimensione massima: 1920px di larghezza
- Qualità: 80-85%
- Strumenti consigliati:
  - [Squoosh](https://squoosh.app/) - Ottimizzazione online
  - [TinyPNG](https://tinypng.com/) - Compressione online

**Script di Ottimizzazione Automatica:**

Se hai molte immagini da convertire, usa lo script fornito:
```bash
node optimize-images.js
```

Questo convertirà automaticamente tutte le immagini JPEG in WebP ottimizzate.