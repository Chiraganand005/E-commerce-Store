import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import path from 'path';
import productRoutes from "./routes/product.route.js";  

dotenv.config();

const app = express();
process.env.PORT = process.env.PORT || 3000; // Set the port from environment variable or default to 5000

const __dirname = path.resolve(); // Get the current directory name

app.use(express.json()); // Middleware to parse JSON bodies 

app.use("/api/products", productRoutes); // Use the product routes  

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the frontend build directory

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); // Serve the index.html file for any other route
  });
}

app.listen(process.env.PORT   , () => {
    connectDB();
  console.log('Server is running on http://localhost:' + process.env.PORT);
});
