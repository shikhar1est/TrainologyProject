import mongoose from "mongoose";

//Connect to the MongoDB

const connectDB= async()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/Trainology`)
}

export default connectDB