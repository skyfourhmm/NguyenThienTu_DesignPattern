// circuitBreakerService.js
const express = require('express');
const CircuitBreaker = require('opossum');
// const axios = require('./retryAxios');
const axios = require('axios'); // <-- axios thuần, không retry


const app = express();
const PORT = 3002;

async function callServiceB() {
    const response = await axios.get('http://localhost:3001/api/data');
    console.log('✅ Gọi Service B thành công');
    return { source: 'circuit-breaker', data: response.data };
}

const breaker = new CircuitBreaker(callServiceB, {
    timeout: 3000,
    resetTimeout: 10000,
    errorThresholdPercentage: 50
});

breaker.fallback(() => ({
    source: 'fallback',
    message: 'Service B không khả dụng. Dữ liệu fallback.'
}));

breaker.on('open', () => console.log('🔴 Circuit breaker OPEN'));
breaker.on('halfOpen', () => console.log('🟡 Circuit breaker HALF-OPEN'));
breaker.on('close', () => console.log('🟢 Circuit breaker CLOSED'));

app.get('/api/use-b', async(req, res) => {
    try {
        const result = await breaker.fire();
        res.json(result);
    } catch (err) {
        res.status(500).json({ source: 'circuit-breaker', error: err.message });
    }
});

app.get('/api/status', (req, res) => {
    res.json({
        stats: breaker.status.stats,
        isOpen: breaker.opened,
        isClosed: breaker.closed,
        isHalfOpen: breaker.halfOpen
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Circuit Breaker Service đang chạy tại http://localhost:${PORT}`);
});