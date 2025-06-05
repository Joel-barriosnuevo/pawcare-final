import axiosInstance from '../utils/axiosConfig';
import { API_ENDPOINTS } from '../config/api';

const reviewService = {
    async getAllReviews() {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.REVIEWS.BASE);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async getReviewsByPet(petId) {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.REVIEWS.BY_PET(petId));
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async getReviewsByUser(userId) {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.REVIEWS.BY_USER(userId));
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async createReview(reviewData) {
        try {
            const response = await axiosInstance.post(API_ENDPOINTS.REVIEWS.BASE, reviewData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async updateReview(id, reviewData) {
        try {
            const response = await axiosInstance.put(`${API_ENDPOINTS.REVIEWS.BASE}/${id}`, reviewData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async deleteReview(id) {
        try {
            const response = await axiosInstance.delete(`${API_ENDPOINTS.REVIEWS.BASE}/${id}`);
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

export default reviewService; 