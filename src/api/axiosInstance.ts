import axios from 'axios';
import { ApiError, ApiErrorType } from './apiError';
import Config from '../../config';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // 5 seconds timeout
  params: {
    appid: Config.OPENWEATHER_API_KEY, // <-- default API key
  },
//    headers: {
//     'Content-Type': 'application/json', // example header
//     'Accept': 'application/json',
//     // You can add custom headers here
//     'X-Custom-Header': 'my-value',
//   },
});


// Response interceptor for centralized error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error)
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new ApiError('Timeout', ApiErrorType.TIMEOUT));
    } else if (!error.response) {
      return Promise.reject(new ApiError('Network Error', ApiErrorType.NETWORK));
    } else if (error.response.status === 404) {
      return Promise.reject(new ApiError('Not Found', ApiErrorType.NOT_FOUND));
    } else {
      return Promise.reject(new ApiError('Unexpected Error', ApiErrorType.UNKNOWN));
    }
  }
);
