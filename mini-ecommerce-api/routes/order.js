import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Create Order
router.post("/", auth, async (req, res) => {
  try {
    const { products } = req.body;
    let total = 0;

    for (let item of products) {
      const product = await Product.findById(item.product);
      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ msg: "Invalid product or insufficient stock" });
      }
      total += product.price * item.quantity;
      product.stock -= item.quantity;
      await product.save();
    }

    // Add 5% platform fee
    total = total + total * 0.05;

    const order = new Order({ user: req.user, products, total });
    await order.save();

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
