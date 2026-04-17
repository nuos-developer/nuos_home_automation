exports.attachTenant = (req,res,next)=>{

if(!req.user)
return res.status(401).json({message:"Unauthorized"});

req.tenantId = req.user.tenantId;

next();

};