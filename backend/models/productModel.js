import mongoose from "mongoose";

// The schema for the products collection
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    inStock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Creating the model using Schema
const Product = mongoose.model("Product", productSchema);

export default Product;
