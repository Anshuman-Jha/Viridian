import mongoose from 'mongoose';
import {ENV} from "./env.js";

export const connectDB = async () => {

try {
  const connection =  await mongoose.connect(ENV.DB_URL);
  console.log("Database Connected to:", ENV.DB_URL);
}
catch(error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
}

};