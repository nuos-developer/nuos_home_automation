const proxyService = require("../services/proxy.service");
const { AUTH_SERVICE_URL } = require("../config/config");


const authController = {

  
  register : async (req, res, next) => {
  
    try {
  
      const data = await proxyService.forwardRequest(
        req,
        `${AUTH_SERVICE_URL}/api/auth/register`
      );
  
      res.json(data);
  
    } catch (err) {
      next(err);
    }
  
  },
  
  login : async (req, res, next) => {
  
    try {
  
      const data = await proxyService.forwardRequest(
        req,
        `${AUTH_SERVICE_URL}/api/auth/login`
      );
  
      res.json(data);
  
    } catch (err) {
      next(err);
    }
  
  },
}

module.exports = authController