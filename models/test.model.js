import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CarModelSchema = new mongoose.Schema({
  model_name: {
    model_name: { type: String },
    release_year: { type: Number },
    serial: { type: Number },
  },
  car_body_type: {
    id: { type: Number },
    body_name: { type: String, required: true },
    body_image: { type: String, default: "image-url" },
    body_image_url: { type: String, default: "image-url" },
    serial: { type: Number },
  },
  package_type: [String],
  chassi_number_prefix: [
    {
      no: { type: String, required: true },
      engines: [],
    },
  ],
});

const TestModel =
  mongoose.models.Test || mongoose.model("Test", CarModelSchema);

export default TestModel;
