import express from "express";

import {
  getAllAppointments,
  createAppointment,
} from "../controllers/appointmentControllers";

const route = express.Router();
route.get("/allAppointments", getAllAppointments);
route.post("/Appointment_create", createAppointment);

export { route as appointmentRoutes };
