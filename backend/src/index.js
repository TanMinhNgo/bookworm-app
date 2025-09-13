import express from 'express';
import connectDB from './lib/db.js';
import cors from 'cors';
import 'dotenv/config';

import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import { connect } from 'mongoose';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use('/api/books', bookRoutes);

    connectDB();

app.get('/', (req, res) => {
    res.send("Connected to Db successfully" + connectDB().connection.host);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});