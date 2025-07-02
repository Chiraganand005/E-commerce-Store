import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";  

dotenv.config();

const app = express();
process.env.PORT = process.env.PORT || 3000; // Set the port from environment variable or default to 5000


app.use(express.json()); // Middleware to parse JSON bodies 

app.use("/api/products", productRoutes); // Use the product routes  

app.listen(process.env.PORT   , () => {
    connectDB();
  console.log('Server is running on http://localhost:' + process.env.PORT);
});
