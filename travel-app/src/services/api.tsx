import axios from 'axios';

const api = axios.create({
    baseURL: 'https://travel-api-hjc5.onrender.com'
})

export default api; 