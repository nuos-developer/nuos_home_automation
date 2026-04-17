// const axios = require('axios');

// exports.forwardRequest = async (req, res, serviceUrl) => {
//   try {
//     const response = await axios({
//       method: req.method,
//       url: `${serviceUrl}${req.originalUrl.replace('/api','')}`,
//       data: req.body,
//       headers: {
//         Authorization: req.headers.authorization
//       }
//     });

//     res.status(response.status).json(response.data);
//   } catch (error) {
//     res.status(error.response?.status || 500).json({
//       message: error.response?.data || error.message
//     });
//   }
// };
