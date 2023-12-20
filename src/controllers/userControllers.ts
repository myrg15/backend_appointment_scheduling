import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
//Models
import { Users } from "../models/Users";
import { Reviews } from "../models/Reviews";
import { Treatments } from "../models/Treatments";
import { Appointments } from "../models/Appointments";
//Database
import { AppDataSource } from "../database";

const userRepository = AppDataSource.getRepository(Users);
const reviewsRepository = AppDataSource.getRepository(Reviews);
const treatmentsRepository = AppDataSource.getRepository(Treatments);
const appointmentRepository = AppDataSource.getRepository(Appointments);

const register = async (req: Request, res: Response) => {
  const {
    name,
    last_name,
    phone_number,
    address,
    email,
    password,
    role,
    status,
  } = req.body;

  console.log(req.body);

  try {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      return res.json({ message: "email invalid" });
    }

    const new_users = new Users();
    new_users.name = name;
    new_users.last_name = last_name;
    new_users.phone_number = phone_number;
    new_users.address = address;
    new_users.email = email;
    new_users.password = bycrypt.hashSync(password, 10);
    if (role === "user") {
      new_users.role = "user";
      new_users.status = status;
    } else if (role === "admin") {
      new_users.role = "admin";
    } else {
      return res.json({ message: "invalid role" });
    }

    const user = await Users.save(new_users);

    res.status(200).json({ status: "success", message: "User create success" });
  } catch (error) {
    console.error("Error registered user:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email } });
    if (!user || !(await bycrypt.compare(password, user.password))) {
      return res.status(403).json({ message: "credentials invalids" });
    }

    user.password = "";

    const token = jwt.sign(
      {
        name: user.id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );
    return res.json({
      success: true,
      message: "user logged succesfully",
      token: token,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "user authentication error",
    });
  }
};

const profile = async (req: Request, res: Response) => {
  const { email } = req.token;
  try {
    const user = await userRepository.findOne({ where: { email } });

    if (user) {
      return res.json({
        success: true,
        message: "profile users retrieved",
        data: user,
      });
      console.log(user);
    } else {
      return res.status(404).json({
        success: false,
        message: "profile users not found",
      });
    }
  } catch (error) {
    console.error("Error get profile:", error);
    return res.status(500).json({
      success: false,
      message: "users not get profile",
    });
  }
};

export { login, register, profile };
