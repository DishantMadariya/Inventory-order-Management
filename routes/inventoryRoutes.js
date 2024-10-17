const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/inventoryController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/products',adminMiddleware, createProduct);
router.get('/products', getProducts);
router.get('/getProduct/:id', getProducts);
router.put('/products/:id',adminMiddleware, updateProduct);
router.delete('/products/:id',adminMiddleware, deleteProduct);

module.exports = router;
