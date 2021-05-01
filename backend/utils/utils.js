import jwt from "jsonwebtoken";

// JWT token generator function
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingSecret",
    {
      expiresIn: "30d",
    }
  );
};

// User authentication checker middleware
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    // Getting the token part from authorization
    const token = authorization.slice(7, authorization.length);

    // Verifying token
    jwt.verify(
      token,
      process.env.JWT_SECRET || "somethingSecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
