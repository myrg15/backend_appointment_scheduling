import { Request, Response } from "express";

import { Appointments } from "../models/Appointments";
import { Users } from "../models/Users";
import { Treatments } from "../models/Treatments";
import { In } from "typeorm";

const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointments.find({
      relations: ["user", "treatments"],
    });
    res.status(200).json({ status: "success", appointments });
  } catch (error) {
    console.error("Error get all appointments:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createAppointment = async (req: Request, res: Response) => {
  const { user_Id, treatment_Ids, name, date, time, status } = req.body;

  try {
    // Obtener el usuario
    const user = await Users.findOneBy({ id: user_Id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Crear la cita sin asignar tratamientos aún
    const new_appointment = new Appointments();
    new_appointment.user = user;
    new_appointment.date = date;
    new_appointment.time = time;
    new_appointment.status = status;

    // Guardar la cita para obtener un ID
    const appointment = await Appointments.save(new_appointment);

    // Ahora, si treatment_Ids es un array, asociar los tratamientos con la cita
    if (Array.isArray(treatment_Ids) && treatment_Ids.length) {
      const treatments = await Treatments.findBy({ id: In(treatment_Ids) });
      appointment.treatments = treatments;
      await Appointments.save(appointment); // Actualizar la cita con los tratamientos
    }

    return res.status(200).json({
      status: "success",
      message: "Appointment created successfully",
      appointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const updateAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const appointment = await Appointments.findOne({
      where: { id: parseInt(id) },
    });
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    console.log(req.body);

    const updatedAppointment = await Appointments.merge(appointment, req.body);
    await Appointments.save(updatedAppointment);

    res.status(200).json({ status: "success", message: "Appointment updated" });
  } catch (error) {
    console.error("Error update appointment:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const deleteAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const appointment = await Appointments.findOne({
      where: { id: parseInt(id) },
    });
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    await Appointments.remove(appointment);

    res.status(200).json({ status: "success", message: "Appointment deleted" });
  } catch (error) {
    console.error("Error delete appointment:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export {
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
