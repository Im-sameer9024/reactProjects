import mongoose from "mongoose";
import 'dotenv/config.js'

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database is connected successfully");
    })
    .catch((error) => {
      console.log("error occur in db connection", error);
    });
}

export default connectDB;