import express from "express";

import { getAllTreatments } from "../controllers/treatmentControllers";

const route = express.Router();

route.get("/all", getAllTreatments);

export { route as treatmentRoutes };
