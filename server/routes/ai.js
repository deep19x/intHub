const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const aiController = require('../controllers/ai');

router.post('/review',authMiddleware,aiController.reviewSolution);

module.exports = router;