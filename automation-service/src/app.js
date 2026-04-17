const express = require('express');
require('dotenv').config();

const automationRoutes = require('./routes/automation.routes');

const app = express();
app.use(express.json());

app.use('/api', automationRoutes);

module.exports = app;
