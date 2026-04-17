const adminSevice = require("../services/admin.service");

const adminController = {
    createTenant: async (req, res, next) => {

        try {

            const tenant = await adminSevice.createTenant(req.body);

            res.status(201).json({
                message: "Tenants Created 1",
                tenant
            });

        } catch (err) {
            res.status(500).json({ message: "Internal Server Error " })
            next(err);
        }

    },

    getTenants : async (req, res)=>{
        try {

            const tenants = await adminSevice.getTenants()
             res.status(201).json({
                message: "Tenants Fatch!",
                tenants
            });

        } catch (error) {
             res.status(500).json({ message: "Internal Server Error " })
            next(err);
        }
    }
}
module.exports = adminController

