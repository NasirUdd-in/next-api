import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const CarModelSchema = new mongoose.Schema({
  car_id: { type: String, required: true },
  condition: { type: String },
  car_manufacturer: {
    maker_id: { type: Number },
    maker_name: { type: String, required: true },
    maker_country: { type: String },
    maker_logo: { type: String },
    maker_logo_url: { type: String },
    serial: { type: String },
  },
  model_name: {
    model_id: { type: Number },
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
  no_of_seat: { type: String },
  transmission_type: { type: String, required: true },
  package_type: [String],
  chassi_number_prefix: [
    {
      no: { type: String, required: true },
      engines: [String],
    },
  ],
  car_fuel: {
    fuel_id: { type: Number },
    fuel_type: { type: String, required: true },
    fuel_tank_capacity: { type: Number },
  },
  Drive: { type: String },
  car_year: { type: String },

  call_for_price: { type: String },
  fixed_price: { type: String },
  registration_year: { type: String },
  car_location: { type: String, default: "null" },
  car_type: {
    type_id: { type: Number },
    type_name: { type: String, required: true },
  },
  grade: { type: String },
  images: {
    image_id: { type: Number },
    image_url: { type: String, default: "image-url" },
  },
});

const CarAutoModel =
  mongoose.models.Cars || mongoose.model("Cars", CarModelSchema);

export default CarAutoModel;
