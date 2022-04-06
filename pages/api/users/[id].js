import nc from "next-connect";
import User from "../../../models/userModel";
import connectDB from "../../../utils/connectDb";

const singleUser = nc()
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .delete(async (req, res) => {
    try {
      await User.findOneAndDelete({ _id: req.query.id });
      res.send("user deleted success");
    } catch (error) {
      res.status(400).json(error);
    }
  });

export default connectDB(singleUser);
