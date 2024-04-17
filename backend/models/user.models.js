
import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, "fullname is required"],
            unique: true,
            lowercase: true,
            trim: true,
            index: true, //index for search , it will create a text index on this field in the background. 
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
            lowercase: true,
            trim: true,

        },
        password: {
            type: String,
            required: [true, 'password is required']
        },
    }, { Timestamps: true }
)
export const User = mongoose.model("User", userSchema)