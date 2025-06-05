import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

const authService = {
    async register(userData) {
        try {
            const response = await axios.post(API_ENDPOINTS.AUTH.REGISTER, userData);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            }
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async login(credentials) {
        try {
            const response = await axios.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            }
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async refreshToken() {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            const response = await axios.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, {
                refreshToken
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('refreshToken', response.data.refreshToken);
            }
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    },

    getToken() {
        return localStorage.getItem('token');
    },

    isAuthenticated() {
        return !!this.getToken();
    },

    handleError(error) {
        if (error.response) {
            return new Error(error.response.data.message || 'An error occurred');
        }
        return error;
    }
};

export default authService; 