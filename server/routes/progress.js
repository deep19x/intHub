const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const progressController = require('../controllers/progress');

router.post('/:questionId',authMiddleware,progressController.updateProgress);

module.exports = router;