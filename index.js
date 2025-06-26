const express = require('express');
const app = express();
const PORT = 4000;

// Middleware 
app.use(express.json());

//fake database
let movies = [
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Titanic', year: 1997 },
  { id: 3, title: 'Pulp Fiction', year: 1994 },
  { id: 4, title: 'The Social Network', year: 2010 },
  { id: 5, title: 'La La Land', year: 2016 }
];

// GET /movies - to display all movies in the database
app.get('/movies', (req, res) => {
  res.json(movies);
});

// POST /movies - to add a new movie
app.post('/movies', (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// PUT /movies/:id - to update movie by ID
app.put('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const index = movies.findIndex(movie => movie.id === movieId);

  if (index !== -1) {
    movies[index] = { ...movies[index], ...req.body };
    res.json(movies[index]);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

// DELETE /movies/:id - to remove a movie
app.delete('/movies/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const index = movies.findIndex(movie => movie.id === movieId);

  if (index !== -1) {
    const removedMovie = movies.splice(index, 1);
    res.json(removedMovie[0]);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
