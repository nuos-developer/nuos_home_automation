const express = require("express");
const { sendCommand } = require("./services/commandService");

const app = express();
app.use(express.json());

app.post("/command", async (req, res) => {
  const { gatewayId, deviceId, action } = req.body;

  await sendCommand(gatewayId, deviceId, action);

  res.json({ message: "Command sent" });
});

module.exports = app;
