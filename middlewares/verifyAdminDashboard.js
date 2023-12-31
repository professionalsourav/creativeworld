import jwt from "jsonwebtoken";

export const verifyadmindash = (req,res,next) =>
{
    const token = req.cookies.access_token;

    if(!token){
        return res.json("token is missing");
    }else{
        jwt.verify(token, process.env.JWT, (err, decoded) =>
        {
            if(err){
              return res.json("something went wrong")
             }else{
                if(decoded.role === 2){
                    next();
                }else{
                    res.json("access denied");
                }
             }
    
    
    
    })
    }
}