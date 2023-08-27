import mongoose from "mongoose";


interface iUser {
    name:string
}

interface iUserData extends iUser, mongoose.Document { }

const userModel = new mongoose.Schema<iUser>({
    name: {
    type:String,
}
},
    {
    timestamps: true
    })

    export default mongoose.model<iUserData>("users",userModel)