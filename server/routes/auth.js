const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.post('/register',authController.registerUser);
router.post('/login',authController.loginUser);
router.get('/me',authMiddleware,(req,res) => {
    return res.status(200).json({user:req.user});
});

module.exports = router;