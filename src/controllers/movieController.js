const express = require('express');
const router = express.Router();
const { getActionMovies2023 } = require('../services/movieService');

router.get('/action-2023', async (req, res) => {
    try {
        const movies = await getActionMovies2023();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies' });
    }
});

module.exports = router;
