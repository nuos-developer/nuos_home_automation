const connection = require("../mqtt/iotClient");

exports.sendCommand = async (gatewayId, deviceId, action) => {
  const topic = `home/${gatewayId}/${deviceId}/command`;

  const payload = JSON.stringify({
    action,
    timestamp: new Date()
  });

  await connection.publish(topic, payload, 1);
};
