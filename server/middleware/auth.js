  
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    // const isCustomAuth = token.length <500;

    let decodedData;
    
    // if(token&&isCustomAuth){
    //   decodedData = jwt.verify(token,'test')
    //   req.userId = decodedData?.id;
    // }
    decodedData = jwt.decode(token);
    req.userId = decodedData?.sub;
    //sub in a google name for any user google user id

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;