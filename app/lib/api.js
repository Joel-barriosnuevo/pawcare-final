const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: `${API_BASE_URL}/api/auth/register`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REFRESH_TOKEN: `${API_BASE_URL}/api/auth/refresh-token`,
    VALIDATE_TOKEN: `${API_BASE_URL}/api/auth/validate-token`,
  },
  USER: {
    PROFILE: `${API_BASE_URL}/api/users/profile`,
    UPDATE_PROFILE: `${API_BASE_URL}/api/users/profile`,
  },
  SERVICES: {
    LIST: `${API_BASE_URL}/api/services`,
    CREATE: `${API_BASE_URL}/api/services`,
    UPDATE: (id) => `${API_BASE_URL}/api/services/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/services/${id}`,
  },
  APPOINTMENTS: {
    LIST: `${API_BASE_URL}/api/appointments`,
    CREATE: `${API_BASE_URL}/api/appointments`,
    UPDATE: (id) => `${API_BASE_URL}/api/appointments/${id}`,
    DELETE: (id) => `${API_BASE_URL}/api/appointments/${id}`,
  },
}; 