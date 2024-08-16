const express = require('express');
// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController')
const router = express.Router();

// Routes CRUD pour les utilisateurs
router.post('/register', userController.createUser);
router.put( '/:id', userController.updateUser);
router.get( '', userController.getAllUsers);
router.get( '/:id', userController.getUserById);
router.delete( '/:id', userController.deleteUser);

module.exports = router ;