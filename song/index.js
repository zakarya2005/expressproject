const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const songRoutes = require('./routes/songroutes');

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/songs', songRoutes);

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(' MongoDB connecté'))
.catch((err) => console.error(' Erreur MongoDB :', err));

// Démarrage du serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(` Serveur lancé sur le port ${PORT}`);
});
