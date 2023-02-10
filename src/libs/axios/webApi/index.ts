import axios from 'axios';

export const WepApi = axios.create({
    baseURL: 'https://${API_URL}',
});
