const jwt = require("jsonwebtoken")

const adminAuth = async (req, res, next) => {
  try {

    const { token } = req.headers
    console.log(token)

    if (!token) {
      return res.json({
        success: false,
        message: "Login again"
      })
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode)

    if (decode.email !== process.env.ADMIN_EMAIL && decode.password !== process.env.ADMIN_PASS) {

      return res.json({
        success: false,
        message: "Not Authorized Login Again"
      })

    }

    next()


  } catch (error) {

    console.log(error)
    return res.json({
      success:false,
      message:"Network Issue"
    })

  }

}

module.exports = adminAuth;