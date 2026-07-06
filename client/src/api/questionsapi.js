import api from "./axios";

export const getQuestions = () => {
    return api.get('/questions');
}