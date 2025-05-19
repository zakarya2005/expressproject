const express = require('express');
const router = express.Router();
const playlistController = require('../controller/playlistcontoller');

router.post('/', playlistController.createPlaylist);
router.get('/', playlistController.getAllPlaylists);
router.get('/:id', playlistController.getPlaylistById);
router.put('/:id', playlistController.updatePlaylist);
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;
