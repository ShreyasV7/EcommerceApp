import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to Mongo ${connect.connection.host}`.bgBlue.white);
  } catch (error) {
    console.log(`Error in MongoDb ${error}`.bgRed.white);
  }
};

export default connectDb;
