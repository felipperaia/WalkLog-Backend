import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/db';
import walkRoutes from './routes/walkRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', walkRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}`);
  });
});