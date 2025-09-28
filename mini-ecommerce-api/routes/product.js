import express from "express";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Create Product
router.post("/", auth, async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const product = new Product({ name, price, stock });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export default router;
