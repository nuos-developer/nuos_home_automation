const { forwardRequest } = require("../services/proxy.service");
const { AUTH_SERVICE_URL } = require("../config/config");


const adminController = {
    createTenant: async (req, res, next) => {
        try {
            const data = await forwardRequest(
                req,
                `${AUTH_SERVICE_URL}/api/admin/tenants`
            );

            res.json(data);

        } catch (err) {
            next(err);
        }

    },
    getTenants: async (req, res, next) => {
        try {
            const data = await forwardRequest(
                req,
                `${AUTH_SERVICE_URL}/api/admin/getTenants`
            );

            res.json(data);

        } catch (err) {
            next(err);
        }

    },
}

module.exports = adminController