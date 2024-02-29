import mongoose from "mongoose";

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
    first: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    second: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    third: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    fourth: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    fifth: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    sixth: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    seventh: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
    eighth: {
      hour: { type: String },
      available: Boolean,
      // clientId: { type: mongoose.SchemaType.ObjectId, ref: "BookingRecord" },
    },
  },
});

export const Hours = mongoose.model("Hours", hoursSchema);
