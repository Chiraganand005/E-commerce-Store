import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts); // Get all products
router.post('/', createProduct); // Create a new product
router.delete('/:id', deleteProduct); // Delete a product by ID 
router.put('/:id', updateProduct); // Update a product by ID

export default router;
