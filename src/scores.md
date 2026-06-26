---
title: Leaderboard
---

# Competition Results

## Currently Ongoing - Final Results from 03.07.2026

```js
// 1. Load both CSV files
const scores = FileAttachment("data/scores.csv").csv({typed: true});
const teams = FileAttachment("data/teams.csv").csv({typed: true});

```

```js
// 2. Sort the scores, take the top 3, and join with the team data
const top3 = scores
  // Sort descending by the 'Total' column
  .toSorted((a, b) => b.Total - a.Total) 
  // Take only the first 3 rows
  .slice(0, 3) 
  // Map over them to find the matching Name and Flag from teams.csv
  .map(score => {
    // We use String() to ensure the IDs match even if one is parsed as text and the other as a number
    const teamInfo = teams.find(t => String(t.ID) === String(score.ID));
    
    return {
      ...score, // Keep all the score data
      Name: teamInfo ? teamInfo.Name : "Unknown Team",
      Flag: teamInfo ? teamInfo.Flag : "🏳️"
    };
  });

```

```js
// 3. Render the Podium visually using HTML and Observable's built-in "card" layout
const colors = ["#FFD700", "#C0C0C0", "#CD7F32"]; // Gold, Silver, Bronze
const medals = ["🥇 1st Place", "🥈 2nd Place", "🥉 3rd Place"];

display(html`
  <div class="grid grid-cols-3" style="text-align: center; margin-bottom: 2rem;">
    
    ${top3.map((team, i) => html`
      <div class="card" style="border-top: 4px solid ${colors[i]};">
        <h2 style="margin-top: 0; color: var(--theme-foreground-muted);">${medals[i]}</h2>
        
        <div style="font-size: 5rem; line-height: 1.2;">${team.Flag}</div>
        
        <h3>${team.Name}</h3>
        
        <h1 style="color: ${colors[i]}; margin-bottom: 0;">${team.Total} pts</h1>
      </div>
    `)}
    
  </div>
`)

```

### Full Leaderboard Table

```js
// 4. Join the Team Name into the full scores dataset
const scoresWithNames = scores.map(score => {
  // Find the matching team in teams.csv
  const teamInfo = teams.find(t => String(t.ID) === String(score.ID));
  
  // Destructure the score object to separate the ID from the rest of the data
  const { ID, ...restOfScore } = score; 
  
  // Rebuild the object in the exact order we want the columns to appear
  return {
    "ID": ID,
    "Team Name": teamInfo ? teamInfo.Name : "Unknown Team",
    ...restOfScore // Spreads the remaining score data (Total, Distance, etc.) to the right
  };
});

```

```js
// 5. Display the standard table below the podium using the newly merged data
view(Inputs.table(scoresWithNames, {
  rows: Infinity,
  required: false
}));

```
