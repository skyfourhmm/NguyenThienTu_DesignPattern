// timeLimiterService.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3004;

// Timeout wrapper cho Promise
function timeLimit(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`⏱️ Timeout sau ${ms}ms`)), ms)
    );
    return Promise.race([promise, timeout]);
}

app.get('/api/use-b', async(req, res) => {
    try {
        const response = await timeLimit(
            axios.get('http://localhost:3001/api/data'),
            2000 // giới hạn 2 giây
        );
        res.json({ source: 'time-limiter', data: response.data });
    } catch (err) {
        res.status(500).json({ source: 'time-limiter', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Time Limiter Service đang chạy tại http://localhost:${PORT}`);
});