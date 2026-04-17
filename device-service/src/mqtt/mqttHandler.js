// const client = require('./awsClient');
// const { pool } = require('../config/db');
// const axios = require('axios');

// const TOPIC = 'home/device/status';

// // When connected
// client.on('connect', () => {
//   console.log('📡 MQTT Connected');

//   client.subscribe(TOPIC, { qos: 1 }, (err) => {
//     if (err) {
//       console.error('❌ MQTT Subscribe Error:', err.message);
//     } else {
//       console.log(`✅ Subscribed to topic: ${TOPIC}`);
//     }
//   });
// });

// Handle incoming messages
// client.on('message', async (topic, message) => {
//   console.log(`📩 Message received on ${topic}`);

//   try {
//     if (topic !== TOPIC) return;

//     // Parse message safely
//     let data;
//     try {
//       data = JSON.parse(message.toString());
//     } catch (err) {
//       console.error('❌ Invalid JSON payload');
//       return;
//     }

//     const { device_id, status, value } = data;

//     if (!device_id || !status) {
//       console.error('❌ Missing required fields');
//       return;
//     }

//     // 1️⃣ Store in PostgreSQL
//     await pool.query(
//       'INSERT INTO devices(device_id, status) VALUES($1, $2)',
//       [device_id, status]
//     );

//     console.log('✅ Data stored in DB:', data);

//     // 2️⃣ Trigger Automation Service (optional but recommended)
//     try {
//       await axios.post('http://localhost:4004/api/evaluate', {
//         device_id,
//         value
//       });

//       console.log('⚡ Automation service notified');
//     } catch (err) {
//       console.error('⚠ Automation service error:', err.message);
//     }

//   } catch (err) {
//     console.error('❌ MQTT Processing Error:', err.message);
//   }
// });

// // Error handling
// client.on('error', (err) => {
//   console.error('❌ MQTT Error:', err.message);
// });

// client.on('close', () => {
//   console.log('🔌 MQTT Connection closed');
// });

// client.on('reconnect', () => {
//   console.log('🔄 MQTT Reconnecting...');
// });


// *************** new code 
const client = require("./awsClient")
const pool = require("../config/db")

const topic = "tenant/+/gateway/+/device/+/status"

client.on("connect", () => {

  client.subscribe(topic, err => {
    if (err) console.log(err)
    else console.log("Subscribed to device status topic")
  })

})

client.on("message", async (topic, message) => {

  try {

    const data = JSON.parse(message.toString())

    const { device_id, status } = data

    await pool.query(
      "UPDATE devices SET status=$1 WHERE device_uid=$2",
      [status, device_id]
    )

    console.log("Device status updated:", data)

  } catch (err) {

    console.error(err)

  }

})