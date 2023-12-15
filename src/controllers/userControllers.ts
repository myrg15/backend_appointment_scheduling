import { Request, Response } from "express";
import bycrypt from "bcrypt";

//models

import { Users } from "../models/Users";
import { Appointments } from "../models/Appointments";
import { Treatments } from "../models/Treatments";
import { Reviews } from "../models/Reviews";
import { AppDataSource } from "../database";

//metódo getRepository de AppDataSource permite realizar operaciones CRUD
const userRepository = AppDataSource.getRepository(Users);
const appointmentRepository = AppDataSource.getRepository(Appointments);
const treatmentsRepository = AppDataSource.getRepository(Treatments);
const reviewsRepository = AppDataSource.getRepository(Reviews);

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
      return res.json({ mensaje: "email invalid" });
    }

    const new_users = new Users();
    new_users.name = name;
    new_users.last_name = last_name;
    new_users.phone_number = phone_number;
    new_users.address = address;
    new_users.email = email;
    new_users.password = bycrypt.hashSync(password, 10);
    new_users.role = role;
    new_users.status = status;

    const user = await Users.save(new_users);

    res.status(200).json({ status: "success", message: "User create success" });
  } catch (error) {
    console.error("Error registered user:", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ where: { email } });

  if (!user || !(await bycrypt.compare(password, user.password))) {
    return res.status(403).json({ message: "credentials invalids" });
  }

  user.password = "";

  res.status(200).json({ status: "success", user });
};

const profile = (req: Request, res: Response) => {
  res.status(200).json({});
};

export { login, register, profile };
