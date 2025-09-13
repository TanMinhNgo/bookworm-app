import express from 'express';
import connectDB from './lib/db.js';
import cors from 'cors';
import 'dotenv/config';

import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
    connectDB();
    res.send();
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connectDB();
});