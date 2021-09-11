import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL:
        process.env.NODE_ENV === 'development'
            ? process.env.REACT_APP_LOCAL_BASE_URL
            : process.env.REACT_APP_API_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
    // withCredentials: true,
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        throw error;
    },
);

axios.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;
