const pool = require('../config/db.config');
const axios = require('axios');

const evaluateRules = async (deviceData) => {
  const { device_id, value } = deviceData;

  const result = await pool.query(
    'SELECT * FROM rules WHERE device_id = $1',
    [device_id]
  );

  const rules = result.rows;

  for (let rule of rules) {
    let conditionMet = false;

    if (rule.operator === '>' && value > rule.threshold_value)
      conditionMet = true;

    if (rule.operator === '<' && value < rule.threshold_value)
      conditionMet = true;

    if (rule.operator === '==' && value == rule.threshold_value)
      conditionMet = true;

    if (conditionMet) {
      console.log('Rule triggered:', rule);

      await axios.post(
        `${process.env.DEVICE_SERVICE_URL}/devices/on`,
        {
          device_id: rule.device_id,
          action: rule.action
        }
      );
    }
  }
};

module.exports = { evaluateRules };
