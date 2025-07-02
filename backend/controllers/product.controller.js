import mongoose from 'mongoose';
import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        return res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error('Error fetching products:', error.message);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export const createProduct = async (req, res) => {
    const product = req.body;
    // Here you would typically save the product to the database
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Please Provide all the fields' });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        return res.status(201).json({ success: true, message: 'Product created successfully' });
    } catch (error) {
        console.error('Error creating product:', error.message);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};      

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};  

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid product ID' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        return res.status(200).json({ success: true, message: 'Product updated successfully', data: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error.message);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};  
