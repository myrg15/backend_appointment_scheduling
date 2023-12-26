import { Router } from "express";
import { auth } from "../middlewares/auth";

// Controllers
import {
  login,
  register,
  profile,
  updateProfile,
} from "../controllers/userControllers";

const route = Router();

route.post("/login", login);
route.post("/register", register);
route.get("/profile", auth, profile);
route.put("/update_profile", auth, updateProfile);

export { route as userRoutes };
