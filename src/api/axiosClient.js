import axios from 'axios';
import queryString from 'query-string';
import { HOST_API } from '../constants';

const axiosClient = axios.create({
    baseURL: HOST_API,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return {
            statusCode: response.status,
            data: response.data,
        };
    }
    return response;
}, (error) => {
    return {
        error: error,
    };
});

export default axiosClient;