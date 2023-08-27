import mongoose from "mongoose";

interface iPayment {
    name?: string;
}

interface iPaymentData extends iPayment, mongoose.Document { }

const paymentModel = new mongoose.Schema({
    name: {
        type: String,
    }
},
    {
    timestamps: true
    })

    export default mongoose.model<iPaymentData>("payments",paymentModel)