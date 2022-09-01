import axios from 'axios';
import { getAccessToken } from '../resources/storage.res';

const instance = axios.create({
    baseURL: 'http://localhost:3333/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'authentication': `Barrer ${getAccessToken()}`
    }
});

// instance.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
// }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error

//     return Promise.reject(error);
// });

export default instance