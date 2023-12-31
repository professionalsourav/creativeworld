import jwt from "jsonwebtoken";

export const verifycreatordash= (req,res, next) =>{
    
    const token = req.cookies.access_token;

    if(!token){
        return res.json("token is not found");
    }else{
        jwt.verify(token, process.env.JWT, (err, decoded) =>
        {

            if(err){
                return res.json("something wrong has happened");
            }else{
                if(decoded.role === 1){
                    next();
                }else{
                    res.json("acess denied");
                }
            }
        })
    }
}