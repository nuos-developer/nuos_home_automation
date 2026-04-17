require("dotenv").config();
const jwt = require('jsonwebtoken')

exports.generateToken = user => {
  return jwt.sign(
    {
      id: user.id,
      tenantId: user.tenant_id,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )
}