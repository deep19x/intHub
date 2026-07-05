import api from "./axios";

export const getOverallStats = () => {
    return api.get('/stats/me');
}