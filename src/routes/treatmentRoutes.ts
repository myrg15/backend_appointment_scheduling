import express from "express";

import {
  createTreatment,
  getAllTreatments,
  updateTreatment,
} from "../controllers/treatmentControllers";

const route = express.Router();

route.get("/all", getAllTreatments);
route.post("/create", createTreatment);
route.put("/treatment_update/:id", updateTreatment);

export { route as treatmentRoutes };
