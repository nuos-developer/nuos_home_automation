const bcrypt = require("bcrypt");

const adminModel = require("../models/admin.model");
// const { generateToken } = require("../utils/generateToken");

const adminSevice = {
  createTenant: async (data) => {
    try {

      console.log("data :>>>", data);



      const tenant = await adminModel.createTenant(
        data.tenant_name,
        data.plan

      );

      return tenant;
    } catch (error) {
      console.error('Error Serivice (register) Function', error);

    }


  },

  getTenants : async ()=>{
    try {
      const tenants = await adminModel.getTenants()

      return tenants
    } catch (error) {
        console.error('Error Serivice (getTenants) Function', error);
    }
  }


};

module.exports = adminSevice