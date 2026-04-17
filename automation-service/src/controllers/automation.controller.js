const pool = require('../config/db.config');


const automationController = {
    createRule : async (req, res) => {
      try {
        const { device_id, condition_type, operator, threshold_value, action } = req.body;
    
        const result = await pool.query(
          'INSERT INTO rules(device_id, condition_type, operator, threshold_value, action) VALUES($1,$2,$3,$4,$5) RETURNING *',
          [device_id, condition_type, operator, threshold_value, action]
        );
    
        res.status(201).json(result.rows[0]);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

}

module.exports = automationController