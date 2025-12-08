const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

// Get dashboard statistics
router.get('/dashboard/stats', authMiddleware, dashboardController.getDashboardStats);

// Get KPIs for dashboard cards
router.get('/dashboard/kpis', authMiddleware, dashboardController.getKPIs);

// Get pipeline overview for dashboard
router.get('/dashboard/pipeline-overview', authMiddleware, dashboardController.getPipelineOverview);

module.exports = router;
