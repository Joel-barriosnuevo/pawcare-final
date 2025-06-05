const API_BASE_URL = 'http://localhost:8081/api';

export const API_ENDPOINTS = {
    // Auth endpoints
    AUTH: {
        REGISTER: `${API_BASE_URL}/auth/register`,
        LOGIN: `${API_BASE_URL}/auth/login`,
        REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh-token`,
    },
    // Pet endpoints
    PETS: {
        BASE: `${API_BASE_URL}/pets`,
        BY_ID: (id) => `${API_BASE_URL}/pets/${id}`,
        BY_OWNER: (ownerId) => `${API_BASE_URL}/pets/owner/${ownerId}`,
    },
    // Notification endpoints
    NOTIFICATIONS: {
        BASE: `${API_BASE_URL}/notifications`,
        MARK_AS_READ: (id) => `${API_BASE_URL}/notifications/${id}/read`,
        PREFERENCES: `${API_BASE_URL}/notifications/preferences`,
    },
    // Review endpoints
    REVIEWS: {
        BASE: `${API_BASE_URL}/reviews`,
        BY_PET: (petId) => `${API_BASE_URL}/reviews/pet/${petId}`,
        BY_USER: (userId) => `${API_BASE_URL}/reviews/user/${userId}`,
    },
    // Report endpoints
    REPORTS: {
        BASE: `${API_BASE_URL}/reports`,
        GENERATE: `${API_BASE_URL}/reports/generate`,
        TEMPLATES: `${API_BASE_URL}/reports/templates`,
    },
}; 