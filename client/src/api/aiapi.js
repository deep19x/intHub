import api from './axios';

export const reviewSolution = (data) => {
    return api.post('/ai/review',data);
}