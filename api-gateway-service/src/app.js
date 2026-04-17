const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/auth.routes");
const deviceRoutes = require("./routes/device.routes");
const adminRoutes = require("./routes/admin.routes")

const { errorHandler } = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);


app.use("/api/auth", authRoutes);
app.use("/api/devices", deviceRoutes);
app.use("/api/admin",adminRoutes);

app.use(errorHandler);

module.exports = app;

