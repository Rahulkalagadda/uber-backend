import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.MONGODB_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// Remove the run() function and its call

export default async function connectToDb() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
}