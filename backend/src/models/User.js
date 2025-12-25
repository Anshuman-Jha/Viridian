import mongoose from 'monggose';
import { connectDB } from '../ib/db';

await connectDB();

const userSchema = new moongoose.schema({
    name: {
        type: String,
        required: true
    },
     email: {
        type: String,
        required: true,
        unique: true 
    },
    profileImage: {
        type: String,
        default: "",
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        timestamps: true
    },
    password: String,
});

const User = mongoose.model("User",userSchema);

export default User;