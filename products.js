/* ================= PRODUCT ROUTES ================= */
/* file: routes/products.js */

const express = require('express');
const router = express.Router();

const auth = require('./auth');
const Product = require('./Product');

/* ================= GET ALL PRODUCTS ================= */
router.get('/', auth, async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ================= ADD PRODUCT ================= */
router.post('/add', auth, async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json({ message: "Product added successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ================= DELETE PRODUCT ================= */
router.delete('/:id', auth, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
