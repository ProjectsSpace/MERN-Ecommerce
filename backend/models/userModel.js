import mongoose from "mongoose";

// The schema for the user collection
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

// The model for the user
const User = mongoose.model("User", userSchema);

export default User;
