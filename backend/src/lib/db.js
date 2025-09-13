import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    const dbURI = process.env.MONGODB_URL || "mongodb+srv://ngominhtan1252004_db_user:9RGrZkgj0rQSDK3v@cluster0.sf13o23.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    try {
        const conn = await mongoose.connect(dbURI);
        console.log('MongoDB connected :', conn.connection.host);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
