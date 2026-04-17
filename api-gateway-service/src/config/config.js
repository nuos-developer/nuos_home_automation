require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
  DEVICE_SERVICE_URL: process.env.DEVICE_SERVICE_URL,
  ADMIN_SERVICE: process.env.ADMIN_SERVICE,
  JWT_SECRET: process.env.JWT_SECRET
};
