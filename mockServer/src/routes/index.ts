import { Router } from "express";
import authRoutes from "./users/user";
import productRoutes from "./products/products";

const router = Router();

router.use("/auth", authRoutes);
router.use("/products", productRoutes);

/** Error handling */
router.use((_, res, __) => {
  const error = new Error("API Endpoint Not found");

  res.status(404).json({
    message: error.message,
  });
});

export default router;
