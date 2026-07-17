import api from "./axios";

export const getMyProgress = () => {
    return api.get("/progress/me");
};

export const updateProgress = (questionId, status) => {
    return api.post(`/progress/${questionId}`, {
        status,
    });
};