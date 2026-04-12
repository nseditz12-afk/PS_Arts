/* ================= PRODUCT ROUTES ================= */
/* file: routes/products.js */

const auth = require('./middleware/auth');
router.post('/add', auth, async (req, res) => {
    res.send("Protected route working");
});

const express = require('express');
const router = express.Router();
const Product = require('./Product');

router.get('/', auth, async (req, res) => {
    res.json([]);
});
const auth = require('./middleware/auth');

router.post('/add', auth, async (req, res) => {
    res.json({ message: "Product added (protected route working)" });
});
const auth = require('./middleware/auth');
const Product = require('./Product');

// DELETE PRODUCT
router.delete('/:id', auth, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;

