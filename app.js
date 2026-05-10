const express = require('express');
const app = express();
app.use(express.json());

let movies= [
  { id: 1, movie: "Superman 2025", category: "Acción", stars: 4 },
  { id: 2, movie: "Siniestro", category: "Terror", stars: 3 }
];

app.get('/movies', (req, res) => {
  res.status(200).json(inventory);
});

app.post('/movies', (req, res) => {
  const { movie, category, stars } = req.body;
  
  if (!movie || !category) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  const newItem = {
    id: inventory.length + 1,
    movie,
    category,
    stars
  };

  inventory.push(newItem);
  res.status(201).json(newItem);
});

app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const exists = inventory.find(item => item.id === id);

  if (!exists) {
    return res.status(404).json({ error: "Película no encontrada" });
  }

  movies = movies.filter(item => item.id !== id);
  res.status(204).send();
});

module.exports = app;