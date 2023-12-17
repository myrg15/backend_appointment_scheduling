import express from "express";
import { auth } from "../middlewares/auth";

// Controllers
import { login, register, profile } from "../controllers/userControllers";

const route = express.Router();

route.post("/login", auth, login);
route.post("/register", register);
route.get("/profile", profile);

export { route as userRoutes };
