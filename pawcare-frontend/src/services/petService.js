import axiosInstance from '../utils/axiosConfig';
import { API_ENDPOINTS } from '../config/api';

const petService = {
    async getAllPets() {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.PETS.BASE);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async getPetById(id) {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.PETS.BY_ID(id));
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async getPetsByOwner(ownerId) {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.PETS.BY_OWNER(ownerId));
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async createPet(petData) {
        try {
            const response = await axiosInstance.post(API_ENDPOINTS.PETS.BASE, petData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async updatePet(id, petData) {
        try {
            const response = await axiosInstance.put(API_ENDPOINTS.PETS.BY_ID(id), petData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async deletePet(id) {
        try {
            const response = await axiosInstance.delete(API_ENDPOINTS.PETS.BY_ID(id));
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

export default petService; 