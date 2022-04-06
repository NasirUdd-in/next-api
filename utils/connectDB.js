import mongoose from "mongoose";
// const url = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.a3up8.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;

const url = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.tn5a1.mongodb.net/${process.env.BD_NAME}?retryWrites=true&w=majority`;
const connectDB = (handler) => async (req, res) => {
  try {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return handler(req, res);
    mongoose.connection.on("connected", () => {
      console.log("mongodb is connected");
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
