const mqtt = require("aws-iot-device-sdk-v2");
const { mqtt_connection_builder } = mqtt;
require("dotenv").config();

const builder = mqtt_connection_builder.mtls_from_path({
  endpoint: process.env.AWS_IOT_ENDPOINT,
  cert_filepath: "./certs/device.pem.crt",
  pri_key_filepath: "./certs/private.pem.key",
  ca_filepath: "./certs/AmazonRootCA1.pem",
  client_id: process.env.CLIENT_ID,
  clean_session: false,
});

const connection = builder.build();

async function connect() {
  await connection.connect();
  console.log("✅ AWS IoT Connected");
}

connect();

module.exports = connection;
