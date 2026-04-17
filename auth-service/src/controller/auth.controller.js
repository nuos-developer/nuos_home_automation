const authService = require("../services/auth.service");

const authController = {

    register : async (req, res, next) => {
    
      try {
    
        const user = await authService.register(req.body);
    
        res.status(201).json({
          message: "User registered!",
          user
        });
    
      } catch (err) {
        res.status(500).json({message : "Internal Server Error "})
        next(err);
      }
    
    },
    
    login : async (req, res, next) => {
    
      try {
        console.log('reBOdy;>>>',req.body);
        
    
        const data = await authService.login(req.body);
        console.log(data);
        
    
        // res.json(data);
    
         res.status(201).json({
                message: "User Login Successfully",
                data
            });
      } catch (err) {
        console.error('Error on "login" function',err)
        next(err);
      }
    
    },
}
module.exports = authController

