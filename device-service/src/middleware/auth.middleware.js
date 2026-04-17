const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.verifyToken = (req, res, next) => {

    try {
        const header = req.headers.authorization

        if (!header) {
            return res.status(401).json({ message: "Token required" })
        }

        const token = header.split(" ")[1]


        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decoded);


        req.user = decoded

        next()

    } catch (err) {

        return res.status(403).json({ message: "Invalid token" })

    }

}