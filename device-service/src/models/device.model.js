const pool = require("../config/db");

const deviceModel = {
    
    createDevice : async (device) => {
    
      const result = await pool.query(
        "INSERT INTO devices(device_id,device_name,status) VALUES($1,$2,$3) RETURNING *",
        [device.device_id, device.device_name, device.status]
      );
    
      return result.rows[0];
    
    },
    
    getDevices : async () => {
    
      const result = await pool.query(
        "SELECT * FROM devices"
      );
    
      return result.rows;
    
    },

}

module.exports = deviceModel