# Intern01\_Day03

---

## 🎬 Movie REST API (Hollywood Movies)

A basic RESTful API built using **Node.js** and **Express.js** to manage a collection of Hollywood movies. This backend application allows users to **create**, **read**, **update**, and **delete** movie records from a simple in-memory database. Ideal for learning CRUD operations and understanding REST principles.

---

## 🚀 Features

* 📄 **View All Movies** — `GET /movies` returns a list of all movies.
* ➕ **Add New Movie** — `POST /movies` adds a new movie with title and release year.
* ✏️ **Update Movie** — `PUT /movies/:id` updates a movie's information.
* ❌ **Delete Movie** — `DELETE /movies/:id` removes a movie from the list.
* 📦 **JSON Middleware** — Supports sending and receiving JSON data.

---

## 🛠️ Tech Stack

| Technology      | Description                             |
| --------------- | --------------------------------------- |
| **Node.js**     | JavaScript runtime for backend          |
| **Express.js**  | Minimalist web framework for APIs       |
| **Postman**     | API testing tool (recommended)          |
| **Nodemon**     | (Optional) Auto-restart on file changes |
| **Body Parser** | (Built-in) Middleware for parsing JSON  |

---

## 📁 Project Structure

```
📦 movie-api
├── index.js         # Main Express server file
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation 😎
```

---

## 🧑‍💻 Getting Started

To run this project locally:

```bash
git clone https://github.com/yourusername/Intern01_Day03.git
cd Intern01_Day03
npm install
node index.js
```

Open your browser or API testing tool and go to:
`http://localhost:3000/movies`

---

## 🔍 Sample JSON for POST request

```json
{
  "title": "The Shawshank Redemption",
  "year": 1994
}
```

---

## ✨ Credits

* Developed by **Difina George**
* Internship Project – *Web Development - Day 03*
