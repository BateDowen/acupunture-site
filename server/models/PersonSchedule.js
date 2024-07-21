import mongoose from "mongoose";

const PersonSchedule = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
});
export const Person = mongoose.model("Person", PersonSchedule);