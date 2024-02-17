import mongoose, { Schema } from "mongoose";

// const hoursSchema = new mongoose.Schema({
//   date: {
//     type: String,
//   },
//   availableHours: [{
//     type: [String],
// }
//   ],
// });

const hoursSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  availableHours: {
    first: { type: String },
    second: { type: String },
    third: { type: String },
    fourth: { type: String },
    fifth: { type: String },
    sixth: { type: String },
    seventh: { type: String },
    eighth: { type: String },
  },
});

export const Hours = mongoose.model("Hours", hoursSchema);
