const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const whatsappRoutes = require('./whatsappRoutes');
const pipelineRoutes = require('./pipelineRoutes');
const analyticsRoutes = require('./analyticsRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const leadsRoutes = require('./leadsRoutes');
const userRoutes = require('./userRoutes');
const tasksRoutes = require('./tasks');

// Mount auth routes
router.use('/auth', authRoutes);

// Mount WhatsApp routes
router.use('/', whatsappRoutes);

// Mount pipeline routes
router.use('/', pipelineRoutes);

// Mount analytics routes
router.use('/', analyticsRoutes);

// Mount dashboard routes
router.use('/', dashboardRoutes);

// Mount leads routes
router.use('/', leadsRoutes);

// Mount user routes
router.use('/', userRoutes);

// Mount tasks routes
router.use('/tasks', tasksRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({ success: true, message: 'API is running' });
});

module.exports = router;
