const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');

// Mount auth routes
router.use('/auth', authRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ success: true, message: 'API is running' });
});

module.exports = router;
