const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin.controller");

const {verifyToken} = require("../middleware/auth.middleware");
const {allowRole} = require("../middleware/role.middleware");

router.post(
"/tenants",
verifyToken,
allowRole("super_admin"),
adminController.createTenant
);

router.get(
"/getTenants",
verifyToken,
allowRole("super_admin"),
adminController.getTenants
);

module.exports = router;