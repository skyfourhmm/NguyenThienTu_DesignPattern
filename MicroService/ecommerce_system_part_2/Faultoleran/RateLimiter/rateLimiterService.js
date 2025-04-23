const express = require('express');
const rateLimit = require('express-rate-limit');
const axios = require('axios');

const app = express();
const PORT = 3003;

// Middleware giới hạn 5 request mỗi 15 giây
const limiter = rateLimit({
    windowMs: 15 * 1000,
    max: 5,
    message: {
        status: 429,
        message: '⛔ Quá nhiều yêu cầu! Vui lòng thử lại sau.'
    }
});

app.use('/api/proxy', limiter); // Áp dụng rate limit cho /api/proxy

// Endpoint proxy request đến Service B
app.get('/api/proxy', async(req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/api/data');
        res.json({ source: 'rate-limiter', data: response.data });
    } catch (err) {
        res.status(500).json({
            source: 'rate-limiter',
            error: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚦 Rate Limiter Service đang chạy tại http://localhost:${PORT}`);
});