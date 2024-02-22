import mongoose from "mongoose";

const BookingRecordSchema = new mongoose.Schema({
    bookingDate: {
        type: String,
        required: true,
    },
    hour: {
        type: String,
        required: true,
        // unique: true
    },
    hourKey: {
        type: String,
        required: true
    },
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    // lastName: { type: String, required: true },
    phone: { type: String, required: true },
}, {
    // toJSON: {
    //     transform: function (doc, ret) {
    //        ret.id = ret._id;
    //        ret.bookingTime = new Date(ret.date)
    //        delete ret.date;
    //        delete ret._id;
    //        delete ret.__v;
    //        ret.fullName = `${ret.firstName} ${ret.lastName}`
    //        ret.test = true
    //     }
    //  }
});

export const BookingRecord = mongoose.model('BookingRecord', BookingRecordSchema);

// module.exports = BookingRecord