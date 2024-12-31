import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000"
    // withCredentials: import.meta.env.VITE_USE_CREDENTIALS === 'true',
});

export default api;