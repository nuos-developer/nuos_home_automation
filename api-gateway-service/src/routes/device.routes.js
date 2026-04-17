const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middleware/auth.middleware");
const deviceController = require("../controllers/device.controller");


router.post("/on",verifyToken,deviceController.turnOn)

router.post("/off",verifyToken,deviceController.turnOff)



module.exports = router;