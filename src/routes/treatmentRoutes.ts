import express from "express";

import {
  createTreatment,
  getAllTreatments,
  updateTreatment,
  deleteTreatment,
} from "../controllers/treatmentControllers";

const route = express.Router();

route.get("/all", getAllTreatments);
route.post("/create", createTreatment);
route.put("/treatment_update/:id", updateTreatment);
route.delete("/treatment_delete/:id", deleteTreatment);

export { route as treatmentRoutes };
