const express = require("express");
const cors = require("cors");

const deviceRoutes = require("./routes/device.routes");

const { errorHandler } = require("./middleware/error.middleware");

require("./mqtt/mqttHandler");

const app = express();

app.use(cors());

app.use(express.json());
console.log("++++++++++++++++++appp");


app.use("/api/devices", deviceRoutes);

app.use(errorHandler);

module.exports = app;