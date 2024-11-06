const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeControllers');

router.get('/', (req, res) => {res.send('Health Check')});

router.get('/animes', animeController.getAllAnimes);

router.get('/animes/:id', animeController.getAnimeById);

router.post('/animes', animeController.createAnime);

router.put('/animes/:id', animeController.updateAnime);

router.delete('/animes/:id', animeController.deleteAnimeById);

module.exports = router;