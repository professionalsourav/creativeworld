import  jwt   from "jsonwebtoken";


export const verifyuserdashboard = (req,res,next) =>{

    const token = req.cookies.access_token;

    if(!token){
        return res.json("token is missing");
    }else{
        jwt.verify(token, process.env.JWT, (err, decodeed) =>{
            if(err){
                return res.json("token is not right")
            }else{
                if(decodeed.role === 0){
                    next();
                }else{
                    res.json("access denied");
                }
            }
        })
    }
}