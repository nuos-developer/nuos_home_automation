const axios = require("axios");

const proxyService = {

  forwardRequest: async (req, url) => {

    const response = await axios({
      method: req.method,
      url: url,
      data: req.body,
      
      headers: {
        Authorization: req.headers.authorization
      }
    });
    return response.data;
  },



  forwardDeviceRequest: async (req, url, user) => {
    
    const response = await axios({
      method: req.method,
      url: url,
         data: {
      ...req.body,
      user: req.user
    },

      headers: {
        Authorization: req.headers.authorization,
        "Content-Type": "application/json"
      }
    });
    console.log(':>>>>>',response.data);

    return response.data;
  },

}

module.exports = proxyService