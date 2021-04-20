import data from "../data.js";
import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const productRouter = express.Router();

// Sending list of products to the frontend
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

// Seed for some products
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // Deleting products before seeding
    // Security risk of deleting all the products visiting this link
    // await Product.remove({});

    const createdProducts = await Product.insertMany(data.products);
    res.send(createdProducts);
  })
);

// Products details api
// Comes after "seed" so "seed" doesn't get treated as id
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(400).send({ message: "Product not found" });
    }
  })
);

export default productRouter;
