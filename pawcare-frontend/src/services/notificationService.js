import axiosInstance from '../utils/axiosConfig';
import { API_ENDPOINTS } from '../config/api';

const notificationService = {
    async getAllNotifications() {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.NOTIFICATIONS.BASE);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async markAsRead(id) {
        try {
            const response = await axiosInstance.put(API_ENDPOINTS.NOTIFICATIONS.MARK_AS_READ(id));
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async getPreferences() {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.NOTIFICATIONS.PREFERENCES);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async updatePreferences(preferences) {
        try {
            const response = await axiosInstance.put(API_ENDPOINTS.NOTIFICATIONS.PREFERENCES, preferences);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    handleError(error) {
        if (error.response) {
            return new Error(error.response.data.message || 'An error occurred');
        }
        return error;
    }
};

export default notificationService; 