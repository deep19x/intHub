const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authController = require('../controllers/auth');

router.post('/register',authController.registerUser);
router.post('/login',authController.loginUser);

module.exports = router;