# 🌍 State Statistics API

A RESTful API built with **Node.js** and **Express.js** that provides Indian state data based on **GDP** and **population**.  
The API supports filtering, sorting, and dynamic routing.

---

## 🚀 Live Demo

🔗 **Base URL:**  
https://node-task3-2.onrender.com

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- REST API Architecture

---

## 📂 Data Structure

The API uses an array of **8 Indian state objects**.

Each state contains:

- `name`
- `gdp`
- `population`

### Example Object

```json
{
  "name": "Gujarat",
  "gdp": 250,
  "population": 70000000
}
```

---

# 📌 API Endpoints (13 Routes)

## 1️⃣ Get All States
**GET** `/states`

👉 https://node-task3-2.onrender.com/states

---

## 2️⃣ Get States by Minimum Population
**GET** `/states?minPopulation=50000000`

👉 https://node-task3-2.onrender.com/states?minPopulation=80000000

---

## 3️⃣ Get State with Highest GDP
**GET** `/states/highest-gdp`

👉 https://node-task3-2.onrender.com/states/highest-gdp

---

## 4️⃣ Get State with Lowest GDP
**GET** `/states/lowest-gdp`

👉 https://node-task3-2.onrender.com/states/lowest-gdp

---

## 5️⃣ Get Top 3 States by GDP
**GET** `/states/top3-gdp`

👉 https://node-task3-2.onrender.com/states/top3-gdp

---

## 6️⃣ Get State by Name
**GET** `/states/:name`

Example:  
👉 https://node-task3-2.onrender.com/states/Gujarat

---

## ⚠️ Error Handling

### 🔴 State Not Found

If the requested state does not exist:

```json
{
  "message": "State not found"
}
```

**Status Code:** `404`

---

### 🔴 Route Not Found

If an invalid route is accessed:

```json
{
  "message": "Route not found"
}
```

**Status Code:** `404`

---

# 🧪 Testing the API

You can test the API using:

- Browser
- Postman
- Thunder Client (VS Code Extension)

---

# 💻 Local Development Setup

### 1️⃣ Clone the repository

```
git clone <your-repository-url>
cd <your-project-folder>
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Start the server

```
node index.js
```

Server will run locally on:

```
http://localhost:3000
```

---

# 📚 Concepts Used

- Express Routing
- Query Parameters
- Dynamic Routes
- Array Methods (`filter`, `reduce`, `sort`)
- HTTP Status Codes
- Custom 404 Handling

---

# 👨‍💻 Author

**Harshil Patel**

---

# 📄 License

This project is open-source and available for learning purposes.
