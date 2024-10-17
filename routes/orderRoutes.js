const express = require('express');
const { createOrder, getOrders, updateOrderStatus } = require('../controllers/orderController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/orders', authMiddleware, createOrder);
router.get('/orders', authMiddleware, getOrders);
router.put('/orders/:id', adminMiddleware, updateOrderStatus);

module.exports = router;
