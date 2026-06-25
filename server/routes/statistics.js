const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const statsController = require('../controllers/statistics');

router
    .route('/me')
    .get(authMiddleware,statsController.getStats);

router
    .route('/topic')
    .get(authMiddleware,statsController.getStatsOnTopics);

module.exports = router;