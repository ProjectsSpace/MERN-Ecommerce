import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";

// to use dotenv
dotenv.config();

// defining express app
const app = express();

// parsing json data in the body of request
// all data will be converted into req.body
// helps to prevent undefined error
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to mongoDB
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Using userRouter on specified path
app.use("/api/users", userRouter);

// Using productRouter on specified path
app.use("/api/products", productRouter);

// Order Router
app.use("/api/orders", orderRouter);

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
