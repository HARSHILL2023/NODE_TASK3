# State API – Express.js Project

A simple REST API built using Express.js that provides multiple routes to fetch and filter Indian state data based on GDP and population.

Base URL:
http://localhost:3000

---

## Tech Stack

- Node.js
- Express.js

---

## Data Structure

The API uses an array of 8 state objects.

Each state contains:
- name
- gdp
- population

Example:

```json
{
  "name": "Gujarat",
  "gdp": 250,
  "population": 70000000
}
```

---

# Available Routes (13 Routes)

## 1. Get All States
GET /states

Example:
http://localhost:3000/states

---

## 2. Get States by Minimum Population
GET /states?minPopulation=50000000

Example:
http://localhost:3000/states?minPopulation=80000000

---

## 3. Get State with Highest GDP
GET /states/highest-gdp

---

## 4. Get State with Lowest GDP
GET /states/lowest-gdp

---

## 5. Get Top 3 States by GDP
GET /states/top3-gdp

---

## 6. Get State by Name
GET /states/:name

Example:
http://localhost:3000/states/Gujarat

---

## 7. Invalid State Handling
If state does not exist:

Response:
```json
{
  "message": "State not found"
}
```

Status Code:
404

---

## 8. Invalid Route Handling
If route does not exist:

Response:
```json
{
  "message": "Route not found"
}
```

Status Code:
404

---

# How to Run

1. Initialize project
```
npm init -y
```

2. Install dependencies
```
npm install express
```

3. Start server
```
node index.js
```

Server will run on:
http://localhost:3000

---

# Concepts Used

- Express routing
- Query parameters
- Dynamic routes
- Array methods (filter, reduce, sort)
- HTTP status codes
- 404 error handling

---

# Author

Harshil Patel
