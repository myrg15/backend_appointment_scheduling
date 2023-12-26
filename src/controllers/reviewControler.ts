import { Request, Response } from "express";
import { Reviews } from "../models/Reviews";

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Reviews.find();
    res.status(200).json({ status: "success", reviews });
  } catch (error) {
    console.error("Error get all reviews:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const createReview = async (req: Request, res: Response) => {
  const { user_Id, treatment_Id, rating, feedback, status } = req.body;

  try {
    const new_review = new Reviews();
    new_review.user_Id = user_Id;
    new_review.treatment_Id = treatment_Id;
    new_review.rating = rating;
    new_review.feedback = feedback;
    new_review.status = status;

    const review = await Reviews.save(new_review);

    res.status(200).json({
      status: "success",
      message: "Review create success",
      review,
    });
  } catch (error) {
    console.error("Error create review:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const updateReview = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const review = await Reviews.findOne({
      where: { id: parseInt(id) },
    });
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    console.log(req.body);

    const updatedReview = await Reviews.merge(review, req.body);
    await Reviews.save(updatedReview);

    res.status(200).json({ status: "success", message: "Review updated" });
  } catch (error) {
    console.error("Error update review:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const deleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const review = await Reviews.findOne({
    where: { id: parseInt(id) },
  });
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }
  try {
    await Reviews.delete({ id: parseInt(id) });
    res.status(200).json({ status: "success", message: "Review deleted" });
  } catch (error) {
    console.error("Error delete review:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export { getAllReviews, createReview, updateReview, deleteReview };
