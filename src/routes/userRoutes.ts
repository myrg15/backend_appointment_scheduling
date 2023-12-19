import { Router } from "express";
import { auth } from "../middlewares/auth";

// Controllers
import { login, register, profile } from "../controllers/userControllers";

const route = Router();

route.post("/login", login);
route.post("/register", register);
route.get("/profile", auth, profile);

export { route as userRoutes };
