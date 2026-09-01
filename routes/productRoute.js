const express = require("express");
const { Product } = require("../models/Product");
const {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const router = express.Router();

/**
 * @description Create a new Product
 * @method POST
 * @route /api/products
 * @access Public
 */
router.post("/", createProduct);


/**
 * @description Get all Products
 * @method GET
 * @route /api/products
 * @access Public
 */
router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
