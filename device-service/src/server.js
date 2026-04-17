const app = require("./app");
require("dotenv").config();

const { connectDB } = require("./config/db");

const PORT = process.env.PORT;

const startServer = async () => {

  try {

    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Device Service running on port ${PORT}`);
    });

  } catch (err) {

    console.error("Server startup failed:", err);

  }

};

startServer();