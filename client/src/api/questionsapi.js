import api from "./axios";

export const getQuestions = () => {
    return api.get('/questions');
}

export const getQuestionById = (id) => {
    return api.get(`/questions/${id}`);
}