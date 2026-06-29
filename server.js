import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/router.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = 3000;

app.use('/api/', router);  

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});