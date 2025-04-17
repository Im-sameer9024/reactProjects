import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

//-----------------Register User

const register = async (req, res) => {
  try {
    console.log("first")
    //---------- fetch data
    const { name, email, password } = req.body;

    //------------validate data
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    let role = "";

    email == process.env.SELLER_EMAIL ? (role = "Admin") : (role = "User");

    //------------check if user already exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(403).json({
        success: false,
        message: "User already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //------------create user
    const user = await User.create({
      name,
      email,
      role,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error occur in register user", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
  try {
    // fetch data
    const { email, password } = req.body;

    // validate data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    // check if user exist
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "User does not registered",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      let payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      let userResponse = user.toObject()
      userResponse.token = token;
      userResponse.password = undefined;

      return res
        .cookie("token", token, {
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
        })
        .status(200)
        .json({
          success: true,
          message: "User logged in successfully",
          data: userResponse,
          token,
        });
    } else {
      return res.status(403).json({
        success: false,
        message: "Invalid Password",
      });
    }
  } catch (error) {
    console.log("error occur in login controllers", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("error in logout", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { register, login, logout };
