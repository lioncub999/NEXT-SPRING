import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
    headers: {
        Authorization: '',
    },
})
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        const r_token = localStorage.getItem('refreshToken');

        if (config.url?.includes('http')) config.baseURL = '';

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default instance;