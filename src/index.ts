import cors from "cors";
import express from "express";

// Routes
import { AppDataSource } from "./database";
import { userRoutes } from "./routes/userRoutes";
import { treatmentRoutes } from "./routes/treatmentRoutes";
import { appointmentRoutes } from "./routes/appointmentRoutes";

const app = express();

const PORT = 4001;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/treatments", treatmentRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
