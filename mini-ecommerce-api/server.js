import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per window
	message: "Too many authentication attempts from this IP, please try again after 15 minutes",
	standardHeaders: true,
	legacyHeaders: false,
});

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per window
	message: "Too many requests from this IP, please try again after 15 minutes",
	standardHeaders: true,
	legacyHeaders: false,
});

app.use("/api/auth", authLimiter , authRoutes);
app.use("/api/products", apiLimiter , productRoutes);
app.use("/api/orders", apiLimiter , orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

