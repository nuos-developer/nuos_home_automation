const express = require("express");
const connectMQTT = require("./mqtt/mqttClient");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("IoT Service Running");
});

connectMQTT();

module.exports = app;
