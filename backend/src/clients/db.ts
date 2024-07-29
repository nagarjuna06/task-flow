import mongoose from "mongoose";
import settings from "../config";

let connected = false;
const connectDB = async () => {
  try {
    if (connected) return;
    await mongoose.connect(settings.db_url);
    connected = true;
    console.log("DB connected!");
  } catch (error) {
    if (error instanceof Error)
      console.log("DB connection Error", error.message);
  }
};

export default connectDB;
