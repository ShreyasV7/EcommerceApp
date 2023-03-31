import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { createCategoryController } from "./../controllers/categoryController.js";
import { updateCategoryController } from "./../controllers/categoryController.js";
const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all category

export default router;
