const Product = require('../models/productModel');

module.exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    if (!name || typeof price !== 'number' || price <= 0 || typeof stock !== 'number' || stock < 0) {
      return res.status(400).json({ message: 'Invalid input' });
    }
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    if (req.params.id) {
      const product = await Product.findById(req.params.id);
      return product ? res.status(200).json(product) : res.status(404).json({ message: 'Product not found' });
    }
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(204).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
