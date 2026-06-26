---
title: Round Results
---

<style>
  /* Allow the table to stretch comfortably across the screen */
  .observablehq {
    max-width: 1400px !important;
  }
</style>

# Round Results

```js
// 1. The Selector Widget
const selectedRound = view(Inputs.select([1, 2, 3, 4, 5], {
  label: "Select Round:",
  value: 1 // Default to Round 1
}));

```

```js
// 2. Pre-declare all files so the static bundler finds them
const teams = FileAttachment("data/teams.csv").csv({typed: true});

// We place the promises in an array so we can index them (0 to 4)
const roundDataFiles = [
  FileAttachment("data/01_scores.csv").csv({typed: true}),
  FileAttachment("data/02_scores.csv").csv({typed: true}),
  FileAttachment("data/03_scores.csv").csv({typed: true}),
  FileAttachment("data/04_scores.csv").csv({typed: true}),
  FileAttachment("data/05_scores.csv").csv({typed: true})
];

```

```js
// 3. Reactively load the correct data based on the dropdown
// Note: Arrays are 0-indexed, so Round 1 is index 0
const currentScores = await roundDataFiles[selectedRound - 1];

```

```js
// 4. Sort by 'Score', take top 3, and join with the Team Flag/Name
const top3 = currentScores
  .toSorted((a, b) => b.Score - a.Score) 
  .slice(0, 3) 
  .map(score => {
    const teamInfo = teams.find(t => String(t.ID) === String(score.ID));
    return {
      ...score, 
      Name: teamInfo ? teamInfo.Name : "Unknown Team",
      Flag: teamInfo ? teamInfo.Flag : "🏳️"
    };
  });

```

```js
const colors = ["#FFD700", "#C0C0C0", "#CD7F32"];
const medals = ["🥇 1st Place", "🥈 2nd Place", "🥉 3rd Place"];

display(html`
  <div class="grid grid-cols-3" style="text-align: center; margin-bottom: 2rem; margin-top: 2rem;">
    ${top3.map((team, i) => html`
      <div class="card" style="border-top: 4px solid ${colors[i]};">
        <h2 style="margin-top: 0; color: var(--theme-foreground-muted);">${medals[i]}</h2>
        <div style="font-size: 5rem; line-height: 1.2;">${team.Flag}</div>
        <h3>${team.Name}</h3>
        <h1 style="color: ${colors[i]}; margin-bottom: 0;">${team.Score} pts</h1>
      </div>
    `)}
  </div>
`)

```

### Detailed Round Data

```js
// 5. Display the table, filtering out DSQ, Logfile, and Datetime
view(Inputs.table(currentScores, {
  columns: [
    "ID", 
    "Payload", 
    "Distance", 
    "Current", 
    "Loading", 
    "Unloading", 
    "Penalty", 
    "Takeoff", 
    "Preliminary Score", 
    "Score"
  ],
  layout: "auto",
  rows: Infinity,
  required: false
}));

```
