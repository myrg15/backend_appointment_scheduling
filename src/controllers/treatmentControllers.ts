import { Request, Response } from "express";

// Models
import { Treatments } from "../models/Treatments";

const getAllTreatments = async (req: Request, res: Response) => {
  try {
    const treatments = await Treatments.find();
    res.status(200).json({ status: "success", treatments });
  } catch (error) {
    console.error("Error get all treatments:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createTreatment = async (req: Request, res: Response) => {
  const { name_treatment, description, duration_treatment, img_url, status } =
    req.body;

  try {
    const new_treatment = new Treatments();
    new_treatment.name_treatment = name_treatment;
    new_treatment.description = description;
    new_treatment.duration_treatment = duration_treatment;
    new_treatment.img_url = img_url;
    new_treatment.status = status;

    const treatment = await Treatments.save(new_treatment);

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

export { getAllTreatments, createTreatment };
