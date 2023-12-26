import cors from "cors";
import express from "express";

// Routes
import { AppDataSource } from "./database";
import { userRoutes } from "./routes/userRoutes";
import { reviewRoutes } from "./routes/reviewRoutes";
import { treatmentRoutes } from "./routes/treatmentRoutes";
import { appointmentRoutes } from "./routes/appointmentRoutes";

const app = express();

const PORT = 4001;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/reviews", reviewRoutes);
app.use("/treatments", treatmentRoutes);
app.use("/appointments", appointmentRoutes);

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
