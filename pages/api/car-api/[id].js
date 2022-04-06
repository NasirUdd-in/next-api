import nc from "next-connect";
import CarAutoModel from "../../../models/car.model";
import connectDB from "../../../utils/connectDb";

const singleCar = nc()
  .delete(async (req, res) => {
    try {
      await CarAutoModel.findOneAndDelete({ _id: req.query.id });
      res.send("car data deleted success");
    } catch (error) {
      res.status(400).json(error);
    }
  })

  .put(async (req, res) => {
    const { id } = req.query;
    console.log(id);
    let carId = await CarAutoModel.findById({ _id: id });
    if (!carId) {
      res.send("this id not found");
    }
    carId = await CarAutoModel.findOneAndUpdate(
      { id },
      {
        car_id: req.body.car_id,
        condition: req.body.condition,
        maker: req.body.maker,
        model: req.body.model,
        body: req.body.body,
        no_of_set: req.body.no_of_set,
        chassis_number: req.body.chassis_number,
        engine_number: req.body.engine_number,
        fuel_type: req.body.fuel_type,
        model_year: req.body.model_year,
        transmission: req.body.transmission,
        drive: req.body.drive,
      },
      {
        new: true,
      },
      res.status(200).json({
        message: "Handling PUT requests ",
        updateCar: carId,
      })
    ).catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
  });

export default connectDB(singleCar);
