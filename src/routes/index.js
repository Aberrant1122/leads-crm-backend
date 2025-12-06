const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const whatsappRoutes = require('./whatsappRoutes');

// Mount auth routes
router.use('/auth', authRoutes);

// Mount WhatsApp routes
router.use('/', whatsappRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ success: true, message: 'API is running' });
});

module.exports = router;
