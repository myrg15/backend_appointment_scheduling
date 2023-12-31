import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenDecoded } from "../types";

const auth = (req: Request, res: Response, next: NextFunction) => {
  console.log("AUTHENTICATING USER");
  try {
    if (!req.headers.authorization) {
      return res.json({
        message: "AUTH_REQUIRED",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.json({ message: "AUTH_REQUIRED" });
    }
    const tokenDecoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as TokenDecoded;
    console.log("JWT Secret:", process.env.JWT_SECRET);
    req.token = tokenDecoded;
    next();
  } catch (error) {
    return res.json({
      error: "Not auth",
    });
  }
};

export { auth };
