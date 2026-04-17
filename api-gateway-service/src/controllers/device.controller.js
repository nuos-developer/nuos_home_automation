const proxyService = require("../services/proxy.service");
const { DEVICE_SERVICE_URL } = require("../config/config");

console.log('DEVICE_SERVICE_URL:>>>',DEVICE_SERVICE_URL);


const deviceController = {

  turnOn: async (req, res, next) => {
    try {
      const data = await proxyService.forwardDeviceRequest(
        req,
        `${DEVICE_SERVICE_URL}/api/devices/on`
      )
      res.json(data)

    } catch (err) {
      console.log('error at line which',err);
      

      next(err)

    }

  },

  turnOff: async (req, res, next) => {

    try {

      const data = await proxyService.forwardDeviceRequest(

        req,

        `${DEVICE_SERVICE_URL}/api/devices/off`

      )

      res.json(data)

    } catch (err) {

      next(err)

    }

  },

  
};

module.exports = deviceController