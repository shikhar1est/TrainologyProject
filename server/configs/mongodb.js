import mongoose from "mongoose";

//Connect to the MongoDB

const connectDB= async()=>{
   try{ mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/Trainology`)}
    catch(error){
        console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
    }
}

export default connectDB