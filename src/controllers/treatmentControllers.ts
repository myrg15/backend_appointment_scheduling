import { Request, Response } from "express";

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
const updateTreatment = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "Invalid ID provided" });
  }
  //console.log(req.body);
  try {
    const treatment = await Treatments.findOne({
      where: { id: parseInt(id) },
    });
    if (!treatment) {
      return res.status(404).json({ message: "Treatment not found" });
    }

    const updatedTreatment = await Treatments.merge(treatment, req.body);
    const result = await Treatments.save(updatedTreatment);

    res.status(200).json({ status: "success", message: "Treatment updated" });
  } catch (error) {
    console.error("Error update treatment:", error);
    res.status(500).json({ message: "internal server error" });
  }
  //console.log(req.body);
};

const deleteTreatment = async (req: Request, res: Response) => {
  const { id } = req.body;
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
