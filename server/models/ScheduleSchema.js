import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    schedule: {
        type: Object,
       
    }
});
export const Schedule = mongoose.model("Schedule", ScheduleSchema);
