const express = require('express');
const router = express.Router();

// Sample data (replace this with MongoDB integration)
let birdSightings = [];

// Get all bird sightings
router.get('/birds', (req, res) => {
  res.json(birdSightings);
});

// Add a new bird sighting
router.post('/birds', (req, res) => {
  const newSighting = req.body;
  birdSightings.push(newSighting);
  res.status(201).json(newSighting);
});

// Update a bird sighting
router.put('/birds/:id', (req, res) => {
  const { id } = req.params;
  const updatedSighting = req.body;
  birdSightings = birdSightings.map(sighting => {
    if (sighting.id === id) {
      return { ...sighting, ...updatedSighting };
    }
    return sighting;
  });
  res.json(updatedSighting);
});

// Delete a bird sighting
router.delete('/birds/:id', (req, res) => {
  const { id } = req.params;
  birdSightings = birdSightings.filter(sighting => sighting.id !== id);
  res.sendStatus(204);
});

module.exports = router;