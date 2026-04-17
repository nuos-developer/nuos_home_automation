const app = require("./app");
const { PORT } = require("./config/config");

app.listen(PORT, () => {

  console.log(`API Gateway running on port ${PORT}`);

});