import mongoose from "mongoose";
import "dotenv/config"


const dbConnection = () => {
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database is connected")
  }).catch((error) => {
    console.log(error)
  })
}

export default dbConnection;