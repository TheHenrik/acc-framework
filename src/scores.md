---
title: Leaderboard
---

# Results



<div class="grid grid-cols-3">
  <div class="card">
    <h2>Udine 🇺🇸</h2>
    <span class="big">1400</span>
  </div>
  <div class="card">
    <h2>Xtra2 🇷🇺 <span class="muted">/ Soviet Union</span></h2>
    <span class="big">1000</span>
  </div>
  <div class="card">
    <h2>München 🇨🇳</h2>
    <span class="big">900</span>
  </div>
</div>

```js
// Lädt die CSV-Datei aus dem data-Verzeichnis
const scores = FileAttachment("data/scores.csv").csv({typed: true});

// Zeigt die interaktive, sortierbare Tabelle an
view(Inputs.table(scores, {
  required: false,
  rows: Infinity,
  // Optional: Hier kannst du die Spaltenüberschriften schöner benennen, falls nötig:
  // header: {
  //   driver: "Fahrer",
  //   points: "Punkte",
  //   gap: "Abstand"
  // }
}));

```
