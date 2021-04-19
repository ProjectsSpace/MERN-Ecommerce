import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Single product details api
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find(
    (item) => item._id === parseInt(req.params.id)
  );
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

// Product list api
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// Using userRouter on specified path
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Catching errors
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at https://localhost:${port}`);
});
