import express from "express";
import {
  getAllReviews,
  updateReview,
  deleteReview,
  createReview,
} from "../controllers/reviewControler";

const route = express.Router();

route.get("/all", getAllReviews);
route.post("/create", createReview);
route.put("/review_update/:id", updateReview);
route.delete("/review_delete/:id", deleteReview);

export { route as reviewRoutes };
