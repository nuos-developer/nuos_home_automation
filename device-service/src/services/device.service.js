const mqttClient = require("../mqtt/awsClient")

exports.turnOnDevice = async (tenantId, gatewayId, deviceId) => {

  const topic = `tenant/${tenantId}/gateway/${gatewayId}/device/${deviceId}/command`

  const payload = JSON.stringify({
    status: "ON"
  })

  console.log("Publishing MQTT message")
  console.log("Topic:", topic)
  console.log("Payload:", payload)

  mqttClient.publish(topic, payload, { qos: 1 }, (err) => {

    if (err) {
      console.error("MQTT Publish Error:", err)
    } else {
      console.log("MQTT Message Published Successfully")
    }

  })
}

exports.turnOffDevice = async(tenantId,gatewayId,deviceId)=>{

mqttClient.publish(
`tenant/${tenantId}/gateway/${gatewayId}/device/${deviceId}/command`,
JSON.stringify({status:"OFF"})
)

}