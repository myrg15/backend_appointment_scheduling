import express from "express";

import {
  createTreatment,
  getAllTreatments,
} from "../controllers/treatmentControllers";

const route = express.Router();

route.get("/all", getAllTreatments);
route.post("/create", createTreatment);

export { route as treatmentRoutes };
