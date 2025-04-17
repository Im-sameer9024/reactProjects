import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role:{
        type:String,
        enum:['Admin','User'],
        required:true,
    },
    cartItems: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
