const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const progressController = require('../controllers/progress');

router
    .route('/me')
    .get(authMiddleware,progressController.getMyProgress);

router
    .route('/:questionId')
    .post(authMiddleware,progressController.updateProgress);

module.exports = router;