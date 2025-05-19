const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controller/userController');

// Routes utilisateur
router.post('/register', register);
router.post('/login', login);
router.get('/profile', getProfile);

module.exports = router;