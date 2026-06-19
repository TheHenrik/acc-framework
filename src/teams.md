---
title: Teams
---

# Participating Teams

Here is the list of teams currently participating in the competition. You can click the column headers to sort the data.

```js
// 1. Load the CSV file
const teams = FileAttachment("data/teams.csv").csv({typed: true});

```

```js
// 2. Display the table, explicitly defining which columns to show
view(Inputs.table(teams, {
  columns: [
    "ID", 
    "Name", 
    "University", 
    "Country", 
    "Flag"
  ],
  layout: "auto",
  required: false,
  rows: Infinity // Optional: Keeps all rows visible without pagination
}));

```
