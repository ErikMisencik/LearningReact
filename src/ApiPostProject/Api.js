
// Use when you have static configuration or token then you can create an custom axios instance
// This allows you to set a base URL and default headers for all requests made with this instance
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptors allow you to run your code or modify the request or response
// before the request is sent or after the response is received
// You can use interceptors to log requests and responses, add authentication tokens, or handle errors

api.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
},
    (config) => {
        const token = localStorage.getItem('token'); // Example of getting a token from local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add token to headers
        }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use((response) => {
    console.log('Response:', response);
    return response;
},
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access - possibly invalid token');
        }
        else if (error.response && error.response.status === 404) {
            console.error('Resource not found');
        }
        else if (error.response && error.response.status >= 500) {
            console.error('Server error');
        }
        else {
            console.error('An unexpected error occurred');
        }
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default api;