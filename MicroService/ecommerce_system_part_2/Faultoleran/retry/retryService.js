// retryService.js
const express = require('express');
const axios = require('./retryAxios');

const app = express();
const PORT = 3000;

app.get('/api/use-b', async(req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/api/data');
        console.log('✅ Gọi Service B thành công');
        res.json({ source: 'retry', data: response.data });
    } catch (error) {
        res.status(500).json({ source: 'retry', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Retry Service đang chạy tại http://localhost:${PORT}`);
});