import express from "express";
import bcrypt from "bcrypt";
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../utils/utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // to remove users before creating
    // stops error on multiple run
    // Security risk of deleting all the users visiting this link
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
  })
);

// signin user  (post method) route
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

// Registration api
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    // Creating user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    // Saving user to the database
    const createdUser = await user.save();

    // Sending registered user data to make the user logged in
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

// Getting single user by id
userRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User Not Found" });
    }
  })
);

export default userRouter;
