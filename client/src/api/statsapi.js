import api from "./axios";

export const getOverallStats = () => {
    return api.get('/stats/me');
}

export const getDashboardStats = () => {
    return api.get('/stats/dashboard');
}

export const getRecentActivity = () => {
    return api.get("/stats/recent-activity");
};