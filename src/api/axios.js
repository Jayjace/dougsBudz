// src/api/axios.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-base-url.com', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optionally, you can add interceptors to handle requests and responses globally
apiClient.interceptors.request.use(
  config => {
    // Do something before the request is sent, like adding authorization tokens
    return config;
  },
  error => {
    // Handle request errors
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => {
    // Do something with the response data
    return response;
  },
  error => {
    // Handle response errors
    return Promise.reject(error);
  }
);

export default apiClient;
