import express from "express";
import data from "./data.js";

const app = express();

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

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at https://localhost:${port}`);
});
