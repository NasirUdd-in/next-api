import TestModel from "models/test.model";
import nc from "next-connect";
import connectDB from "utils/connectDb";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .get(async (req, res) => {
    try {
      const rdv = await TestModel.find();
      res.json(rdv);
    } catch (e) {
      res.send({ message: "Error in Fetching rendez vous" });
    }
  })
  .post((req, res) => {
    console.log(req.body);
    const newUser = new TestModel({
      model_name: req.body.model_name,
      chassi_number_prefix: req.body.chassi_number_prefix,
    });
    newUser
      .save()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /user",
          createdUser: result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });

export default connectDB(handler);
