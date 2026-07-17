import api from "./axios";

export const getSubmissions = (questionId) => {
    return api.get(`/submissions/${questionId}`);
};

export const getSubmissionDetails = (submissionId) => {
    return api.get(`/submissions/details/${submissionId}`);
};