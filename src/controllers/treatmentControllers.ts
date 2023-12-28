import { Request, Response } from "express";

import { Treatments } from "../models/Treatments";
import { Reviews } from "../models/Reviews";
import { In } from "typeorm";
const getAllTreatments = async (req: Request, res: Response) => {
  try {
    const treatments = await Treatments.find({
      relations: ["reviews"],
    });
    res.status(200).json({ status: "success", treatments });
  } catch (error) {
    console.error("Error get all treatments:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createTreatment = async (req: Request, res: Response) => {
  const {
    review_Ids,
    //appointment_Id,
    name_treatment,
    description,
    duration_treatment,
    img_url,
    status,
  } = req.body;

  try {
    //creo el tratamiento sin asignar reseñas
    const new_treatment = new Treatments();
    //new_treatment.reviews = review_Id;
    //new_treatment.appointments = appointment_Id;
    new_treatment.name_treatment = name_treatment;
    new_treatment.description = description;
    new_treatment.duration_treatment = duration_treatment;
    new_treatment.img_url = img_url;
    new_treatment.status = status;
    //guardo el tratemiento para obtener un id
    const treatment = await Treatments.save(new_treatment);
    //ahora si review_Ids es un array, asociar las reseñas con el tratamiento
    if (Array.isArray(review_Ids) && review_Ids.length) {
      const reviews = await Reviews.findBy({ id: In(review_Ids) });
      treatment.reviews = reviews;
      await Treatments.save(treatment); //actualizar el tratamiento con las reseñas
    }

    res.status(200).json({
      status: "success",
      message: "Treatment create success",
      treatment,
    });
  } catch (error) {
    console.error("Error create treatment:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const updateTreatment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const treatment = await Treatments.findOne({
      where: { id: parseInt(id) },
    });
    if (!treatment) {
      return res.status(404).json({ message: "Treatment not found" });
    }

    console.log(req.body);

    const updatedTreatment = await Treatments.merge(treatment, req.body);
    await Treatments.save(updatedTreatment);

    res.status(200).json({ status: "success", message: "Treatment updated" });
  } catch (error) {
    console.error("Error update treatment:", error);
    res.status(500).json({ message: "internal server error" });
  }
  //console.log(req.body);
};

const deleteTreatment = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const treatment = await Treatments.findOne({ where: { id: parseInt(id) } });
  if (!treatment) {
    return res.status(404).json({ message: "Treatment not found" });
  }
  try {
    await Treatments.delete({ id: parseInt(id) });
    res.status(200).json({ status: "success", message: "Treatment deleted" });
  } catch (error) {
    console.error("Error delete treatment:", error);
    res.status(500).json({ message: "internal server error" });
  }
};
export { getAllTreatments, createTreatment, updateTreatment, deleteTreatment };
