const bcrypt = require("bcrypt");

const userModel = require("../models/user.model");
const { generateToken } = require("../utils/generateToken");

const authService = {

  register: async (data) => {
    try {

      console.log("data :>>>", data);


      const hash = await bcrypt.hash(data.password, 10);

      const user = await userModel.createUser(
        data.user_name,
        data.email,
        data.role,
        hash,
        data.tenant_id
      );

      return user;
    } catch (error) {
      console.error('Error Serivice (register) Function', error);

    }


  },

  login: async (data) => {

    const user = await userModel.findUserByEmail(data.email);

    if (!user) throw new Error("User not found");

    const match = await bcrypt.compare(data.password, user.password);

    if (!match) throw new Error("Invalid password");

    const token = generateToken(user);


    return {
      token,
      user
    };

  },

};

module.exports = authService