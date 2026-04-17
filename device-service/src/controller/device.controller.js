const deviceService = require("../services/device.service")
const deviceController = {

  turnOn : async(req,res)=>{
  
const { gateway_id,device_id, user } = req.body

console.log('tenantId:>>>>',user.tenantId);


const publish =  await deviceService.turnOnDevice(
user.tenantId,
gateway_id,
device_id
)


console.log('publish :>>>>>',publish);

res.status(201).json({
                message: "Device ON command sent",
                publish
            });

},
  turnOff : async(req,res)=>{

const { gateway_id,device_id, user } = req.body

await deviceService.turnOffDevice(
user.tenantId,
gateway_id,
device_id
)

res.json({message:"Device OFF command sent"})

},
}

module.exports =  deviceController