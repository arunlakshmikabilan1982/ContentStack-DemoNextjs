import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pkrishnavamsi2001:Krishnavamsi@cluster0.8w43f3b.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
