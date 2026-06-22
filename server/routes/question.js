const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const adminMiddleware = require('../middlewares/admin');
const questionController = require('../controllers/question');

router.post('/',authMiddleware,adminMiddleware,questionController.createQuestion);
router.get('/',questionController.getQuestions);
router.get('/:id',questionController.getQuestionById);

module.exports = router;