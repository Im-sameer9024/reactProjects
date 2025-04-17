import jwt from "jsonwebtoken";
import "dotenv/config.js";

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(404).json({
        success: false,
        message: "No token found",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("token is decoded", decoded);
      req.user = decoded;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "You are not authorized for Admin",
      });
    }

    next();
  } catch (error) {
    console.log("error in admin middleware", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const isUser = async (req, res, next) => {
  try {
    if (req.user.role !== "User") {
      return res.status(401).json({
        success: false,
        message: "You are not authorized for User",
      });
    }

    next();
  } catch (error) {
    console.log("error in admin middleware", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { auth, isAdmin, isUser };
