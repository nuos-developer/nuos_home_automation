const express = require('express');
const router = express.Router();
const automationController = require('../controllers/automation.controller');

router.post('/rules', automationController.createRule);

module.exports = router;
