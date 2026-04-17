const app = require("./app");
const { connectDB } = require("./config/db.config");

require("dotenv").config();

const PORT = process.env.PORT || 4002;

const startServer = async () => {

  try {

    // Connect Database
    await connectDB();

    // Start Server
    app.listen(PORT, () => {
      console.log(`Auth Service running on port ${PORT}`);
    });

  } catch (err) {

    console.error("Server Start Error:", err);

  }

};

startServer();