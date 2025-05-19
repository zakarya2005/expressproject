const express = require('express');
const router = express.Router();
const songController = require('../controller/songController');

router.post('/', songController.createSong);
router.get('/', songController.getAllSongs);
router.get('/:id', songController.getSongById);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);

module.exports = router;
