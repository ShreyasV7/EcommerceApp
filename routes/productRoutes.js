import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController } from "../controllers/productController.js";
import { getProductController } from "../controllers/productController.js";
import formidable from "express-formidable";
import { getSingleProduct } from "../controllers/productController.js";
import { productPhotoController } from "../controllers/productController.js";
import { deleteProductController } from "../controllers/productController.js";
import { updateProductController } from "../controllers/productController.js";
const router = express.Router();

// create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.post(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// getAll product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProduct);

// get photo
router.get("/product-photo/:pid", productPhotoController);

//delete
router.delete("/product/:pid", deleteProductController);
export default router;
