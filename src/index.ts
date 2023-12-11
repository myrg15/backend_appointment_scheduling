import express from 'express';
import cors from 'cors';

import { userRoutes } from './routes/userRoutes';

const app = express();
const PORT = 4001

app.use(cors())

app.use("/users", userRoutes)


app.listen (PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})


