const {pool} = require("../config/db.config");

const adminModel = {

    createTenant : async (tenant_name, plan) => {
        try {
            
          const result = await pool.query(
            "INSERT INTO tenants(tenant_name, plan) VALUES($1,$2) RETURNING *",
            [tenant_name, plan]
          );
        
          return result.rows[0];
        } catch (error) {
                console.error('BD Error in "createUser":',error)            
        }
        console.log(pool);
    
    },

    getTenants :async () => {
    
      const result = await pool.query(
        `SELECT id, t.tenant_name , plan, t.created_at 
        FROM tenants t`,
      );
    
      return result.rows;
    
    },
};

module.exports = adminModel