const express = require('express');
const router = express.Router();

// ⚠️ Capital 'D' in 'workoutData'
const exercises = require('../data/workoutdata');

// Route: GET /workouts
router.get('/', (req, res) => {
  res.json(exercises);
});

module.exports = router;


