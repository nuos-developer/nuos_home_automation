const { pool } = require("../config/db.config");

const userModel = {

    createUser: async (name, email, role, password, tenant_id) => {
        try {

            const result = await pool.query(
                "INSERT INTO users(user_name, email, password, role, tenant_id) VALUES($1,$2,$3, $4, $5) RETURNING *",
                [name, email, password, role, tenant_id]
            );

            return result.rows[0];
        } catch (error) {
            console.error('BD Error in "createUser":', error)
        }
        console.log(pool);

    },

    findUserByEmail: async (email) => {

        const result = await pool.query(
            `SELECT *
            FROM users u
            -- join tenants t on t.id = u.tenant_id 
            WHERE email=$1`,
            [email]
        );

        return result.rows[0];

    },
};

module.exports = userModel