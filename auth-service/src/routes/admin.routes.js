const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin.controller");

router.post("/tenants", adminController.createTenant)

router.get("/getTenants", adminController.getTenants)

module.exports = router;