const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes); // Toutes les routes utilisateur

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log(' MongoDB connecté'))
        .catch((err) => console.error('Erreur MongoDB :', err));

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Serveur en écoute sur le port ${PORT}`);
});
