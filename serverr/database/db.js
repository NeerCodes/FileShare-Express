import mongoose from "mongoose";


const DBConnection = async () => {
    const MONGO_URI = `mongodb+srv://neercodes:neeraj123@cluster0.xjfbgxa.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(MONGO_URI, { useNewUrlParser: true});
       console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;