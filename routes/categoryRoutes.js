import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { createCategoryController } from "./../controllers/categoryController.js";
import { updateCategoryController } from "./../controllers/categoryController.js";
import { categoryController } from "./../controllers/categoryController.js";
import { singleCategoryController } from "./../controllers/categoryController.js";
import { deleteCategory } from "./../controllers/categoryController.js";
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
router.get("/getall-category", categoryController);

// get one category
router.get("/single-category/:slug", singleCategoryController)

// delete
router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategory)

export default router;
