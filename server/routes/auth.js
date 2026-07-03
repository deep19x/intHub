const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.post('/register',authController.registerUser);
router.post('/login',authController.loginUser);
router.get('/me',authMiddleware,authController.meUser);

module.exports = router;