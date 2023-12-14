import express from 'express';
import cors from 'cors';

import { userRoutes } from './routes/userRoutes';
import { AppDataSource } from './database';

const app = express();
const PORT = 4001

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {console.log(`Server running ${PORT}`);})
  })
  .catch(error => {
    console.log(error)
  })



