// frontend/utils/api.ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/auth',
});

export const register = (data: any) => api.post('/register', data);
export const login = (data: any) => api.post('/login', data);
