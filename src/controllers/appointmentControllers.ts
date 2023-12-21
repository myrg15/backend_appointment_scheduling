import { Request, Response } from "express";

import { Appointments } from "../models/Appointments";

const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointments.find();
    res.status(200).json({ status: "success", appointments });
  } catch (error) {
    console.error("Error get all appointments:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
const createAppointment = async (req: Request, res: Response) => {
  const { id_user, treatment_Id, name, date, time, status } = req.body;
  console.log(req.body);

  try {
    const new_appointment = new Appointments();
    new_appointment.user_Id = id_user;
    new_appointment.treatment_Id = treatment_Id;
    new_appointment.name = name;
    new_appointment.date = date;
    new_appointment.time = time;
    new_appointment.status = status;

    const appointment = await Appointments.save(new_appointment);

    res.status(200).json({
      status: "success",
      message: "Appointment create success",
      appointment,
    });
  } catch (error) {
    console.error("Error create appointment:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export { getAllAppointments, createAppointment };
