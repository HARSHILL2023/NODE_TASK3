const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



let states = [
  { id: 1, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 2, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 3, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
  { id: 4, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
  { id: 5, name: "Punjab", population: 27743338, literacyRate: 75.84, annualBudget: 180000, gdp: 11000000 },
  { id: 6, name: "Rajasthan", population: 68548437, literacyRate: 66.11, annualBudget: 225000, gdp: 14000000 },
  { id: 7, name: "Tamil Nadu", population: 72147030, literacyRate: 80.09, annualBudget: 300000, gdp: 22000000 },
  { id: 8, name: "Uttar Pradesh", population: 199812341, literacyRate: 67.68, annualBudget: 350000, gdp: 25000000 }
];



app.get("/states", (req, res) => {
  res.status(200).json(states);
});


app.get("/states/highest-gdp", (req, res) => {

  let highest = states[0];

  for (let i = 1; i < states.length; i++) {
    if (states[i].gdp > highest.gdp) {
      highest = states[i];
    }
  }

  res.status(200).json(highest);
});

app.get("/states/:id", (req, res) => {

  let id = parseInt(req.params.id);
  let state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  res.status(200).json(state);
});

app.post("/states", (req, res) => {

  let newId = states.length + 1;

  let newState = {
    id: newId,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp
  };

  states.push(newState);

  res.status(201).json(newState);
});


app.put("/states/:id", (req, res) => {

  let id = parseInt(req.params.id);
  let index = states.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states[index] = {
    id: id,
    name: req.body.name,
    population: req.body.population,
    literacyRate: req.body.literacyRate,
    annualBudget: req.body.annualBudget,
    gdp: req.body.gdp
  };

  res.status(200).json(states[index]);
});


app.put("/states/:id/budget", (req, res) => {

  let id = parseInt(req.params.id);
  let state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  } 

  state.annualBudget = req.body.annualBudget;

  res.status(200).json(state);
});

app.put("/states/:id/population", (req, res) => {

  let id = parseInt(req.params.id);
  let state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.population = req.body.population;

  res.status(200).json(state);
});


app.patch("/states/:id/literacy", (req, res) => {

  let id = parseInt(req.params.id);
  let state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.literacyRate = req.body.literacyRate;

  res.status(200).json(state);
});


app.patch("/states/:id/gdp", (req, res) => {

  let id = parseInt(req.params.id);
  let state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  state.gdp = req.body.gdp;

  res.status(200).json(state);
});


app.patch("/states/:id", (req, res) => {

  let id = parseInt(req.params.id);
  let state = states.find(s => s.id === id);

  if (!state) {
    return res.status(404).json({ message: "State not found" });
  }

  if (req.body.name !== undefined) state.name = req.body.name;
  if (req.body.population !== undefined) state.population = req.body.population;
  if (req.body.literacyRate !== undefined) state.literacyRate = req.body.literacyRate;
  if (req.body.annualBudget !== undefined) state.annualBudget = req.body.annualBudget;
  if (req.body.gdp !== undefined) state.gdp = req.body.gdp;

  res.status(200).json(state);
});


app.delete("/states/:id", (req, res) => {


  let idd = parseInt(req.params.id);
  let index = states.findIndex(s => s.id === idd);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states.splice(index, 1);

  res.status(204).send();
});


app.delete("/states/name/:name", (req, res) => {

  let name = req.params.name.toLowerCase();
  let index = states.findIndex(s => s.name.toLowerCase() === name);

  if (index === -1) {
    return res.status(404).json({ message: "State not found" });
  }

  states.splice(index, 1);

  res.status(204).send();
});


app.delete("/states/low-literacy/:percentage", (req, res) => {

  let percent = parseFloat(req.params.percentage);
  let deletedCount = 0;

  for (let i = states.length - 1; i >= 0; i--) {
    if (states[i].literacyRate < percent) {
      states.splice(i, 1);
      deletedCount++;
    }
  }

  res.status(200).json({ deletedCount: deletedCount });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});