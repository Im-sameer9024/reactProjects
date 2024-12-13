const jwt = require("jsonwebtoken")

const userAuth = async (req, res, next) => {

  try {

    const{token} = req.headers;

    if(!token){
      return res.status(401).json({
        success: false,
        message: "Not authorized"
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next()
    
  } catch (error) {
      console.log(error);
      res.status(401).json({
        success: false,
        message: "Token is not valid"
      })    
  }

}


module.exports = userAuth;