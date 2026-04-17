const app = require("./app");
require("dotenv").config();

const PORT = process.env.IOT_PORT

app.listen(PORT, () => {
  console.log(`🚀 IoT Service running on port ${PORT}`);
});
