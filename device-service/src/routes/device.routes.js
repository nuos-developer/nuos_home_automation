const express = require("express");

const router = express.Router();

const deviceController = require("../controller/device.controller");

const { verifyToken } = require("../middleware/auth.middleware")

console.log("11111111111111");

router.post("/on", deviceController.turnOn)

router.post("/off",deviceController.turnOff)

// router.post("/", deviceController.createDevice);

// router.get("/", deviceController.getDevices);

// router.post("/on", deviceController.turnOn);

// router.post("/off", deviceController.turnOff);

module.exports = router;