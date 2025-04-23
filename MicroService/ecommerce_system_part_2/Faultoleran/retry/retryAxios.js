// retryAxios.js
const axios = require('axios');
const axiosRetry = require('axios-retry').default;

axiosRetry(axios, {
    retries: 3,
    retryDelay: retryCount => {
        console.log(`🔁 Retry lần thứ ${retryCount}`);
        return retryCount * 1000;
    },
    retryCondition: error => {
        return error.response && error.response.status >= 500;
    }
});

module.exports = axios;