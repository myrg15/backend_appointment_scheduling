import { Request, Response } from "express";

// Models
import { Treatments } from "../models/Treatments";

const getAllTreatments = async (req: Request, res: Response) => {
  try {
    const treatments = await Treatments.find();
    console.log(treatments);
    res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("Error get all treatments:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export { getAllTreatments };
