import express from "express";

import {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointmentControllers";
import { auth } from "../middlewares/auth";

const route = express.Router();
route.get("/allAppointments", getAllAppointments);
route.post("/appointment_create", auth, createAppointment);
route.put("/appointment_update/:id", updateAppointment);
route.delete("/appointment_delete/:id", deleteAppointment);
export { route as appointmentRoutes };
