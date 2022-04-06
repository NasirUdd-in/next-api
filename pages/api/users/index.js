import nc from "next-connect";
import User from "../../../models/userModel";
import connectDB from "../../../utils/connectDb";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async(req, res) => {
    try {
      const rdv = await User.find();
      res.json(rdv);
    } catch (e) {
      res.send({ message: "Error in Fetching rendez vous" });
    }
  })
  .post((req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    newUser
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /user",
          createdUser: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .delete(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default  connectDB(handler);