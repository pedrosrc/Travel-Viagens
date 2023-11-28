import axios from 'axios';

const api = axios.create({
    baseURL: 'https://travel-api-xi.vercel.app/'
})

export default api; 