const Playlist = require('../models/playlist');

// Créer une playlist
exports.createPlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.create(req.body);
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtenir toutes les playlists
exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('songs');
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtenir une playlist par ID
exports.getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('songs');
    if (!playlist) return res.status(404).json({ error: 'Playlist non trouvée' });
    res.json(playlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une playlist
exports.updatePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('songs');
    if (!playlist) return res.status(404).json({ error: 'Playlist non trouvée' });
    res.json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer une playlist
exports.deletePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndDelete(req.params.id);
    if (!playlist) return res.status(404).json({ error: 'Playlist non trouvée' });
    res.json({ message: 'Playlist supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
