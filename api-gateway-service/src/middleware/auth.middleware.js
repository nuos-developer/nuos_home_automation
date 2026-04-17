const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {

  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "Token required" });
  }

  const token = header.split(" ")[1];

  try {

    console.log("TOKEN:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("SECRET:", decoded);

    req.user = decoded;

    next();

  } catch (err) {

    console.log("JWT ERROR:", err.message);

    return res.status(403).json({ message: "Invalid token" });

  }
};