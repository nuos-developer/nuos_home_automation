const mqtt = require('mqtt');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const options = {
  clientId: process.env.CLIENTID,
  key: fs.readFileSync(path.join(__dirname, '../../certs/private.pem.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../certs/certificate.pem.crt')),
  ca: fs.readFileSync(path.join(__dirname, '../../certs/AmazonRootCA1.pem')),
  rejectUnauthorized: true,
  reconnectPeriod: 3000,
  keepalive: 60
};

const client = mqtt.connect(
  `mqtts://${process.env.AWS_IOT_ENDPOINT}:8883`,
  options
);

console.log('Endpoint:', process.env.AWS_IOT_ENDPOINT);

client.on('connect', () => {
  console.log('✅ Connected to AWS IoT Core');
});

client.on('error', (err) => {
  console.error('❌ ERROR:', err);
});

client.on('close', () => {
  console.log('❌ Connection closed');
});

client.on('reconnect', () => {
  console.log('🔄 Reconnecting...');
});

module.exports = client

