import axiosInstance from '../utils/axiosConfig';
import { API_ENDPOINTS } from '../config/api';

const reportService = {
    async getAllReports() {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.REPORTS.BASE);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async generateReport(reportData) {
        try {
            const response = await axiosInstance.post(API_ENDPOINTS.REPORTS.GENERATE, reportData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async getReportTemplates() {
        try {
            const response = await axiosInstance.get(API_ENDPOINTS.REPORTS.TEMPLATES);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    },

    async downloadReport(id) {
        try {
            const response = await axiosInstance.get(`${API_ENDPOINTS.REPORTS.BASE}/${id}/download`, {
                responseType: 'blob'
            });
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

export default reportService; 