import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRouter } from './routes/userRouter';

dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT;
app.use(cors());
app.use("/users", userRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
