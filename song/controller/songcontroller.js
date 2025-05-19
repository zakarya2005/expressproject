const Song = require('../models/song');

// Créer une chanson
exports.createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lire toutes les chansons
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire une chanson par ID
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ error: 'Chanson non trouvée' });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour une chanson
exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!song) return res.status(404).json({ error: 'Chanson non trouvée' });
    res.json(song);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Supprimer une chanson
exports.deleteSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.id);
    if (!song) return res.status(404).json({ error: 'Chanson non trouvée' });
    res.json({ message: 'Chanson supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
