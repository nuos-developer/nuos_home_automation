const mqtt = require("aws-iot-device-sdk-v2");
const { mqtt_connection_builder } = mqtt;
const pool = require("../dbConfig/dbConfig");
require("dotenv").config();

const connection = mqtt_connection_builder.mtls_from_path({
  endpoint: process.env.AWS_IOT_ENDPOINT,
  cert_filepath: "./certs/certificate.pem.crt",
  pri_key_filepath: "./certs/private.pem.key",
  ca_filepath: "./certs/AmazonRootCA1.pem",
  client_id: process.env.CLIENT_ID,
  clean_session: false,
});

async function connectMQTT() {
    console.log("+++++++++++++++");
    
  const mqttConnection = connection.build();
  console.log('mqtt connection :>>>>>>>>',mqttConnection);
  

  await mqttConnection.connect();
  console.log("✅ Connected to AWS IoT");

  await mqttConnection.subscribe("home/+/status", 1, async (topic, payload) => {
    const message = payload.toString();
    console.log("📩 Message Received:", topic, message);

    try {
      await pool.query(
        "INSERT INTO device_logs(topic, message) VALUES($1,$2)",
        [topic, message]
      );
      console.log("💾 Saved to DB");
    } catch (err) {
      console.error(err);
    }
  });
}

module.exports = connectMQTT;
