const express = require("express");
const authMiddleware = require("../middlewares/auth");
const submissionController = require("../controllers/submission");

const router = express.Router();

router
    .route("/details/:submissionId")
    .get(
        authMiddleware,
        submissionController.getSubmissionDetails
    );

router
    .route("/:questionId")
    .get(
        authMiddleware,
        submissionController.getMySubmissions
    );

module.exports = router;