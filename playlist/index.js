const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const playlistRoutes = require('./routes/playlistroutes');

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/playlists', playlistRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(' MongoDB connecté'))
.catch((err) => console.error('Erreur MongoDB :', err));

// Serveur sur le port 5002
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(` Serveur playlist lancé sur le port ${PORT}`);
});
