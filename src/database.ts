import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

import { Users } from "./models/Users";
import { Appointments } from "./models/Appointments";
import { Treatments } from "./models/Treatments";
import { Reviews } from "./models/Reviews";
import { Users1702930737798 } from "./migration/1702930737798-Users";
import { Appointments1702931883584 } from "./migration/1702931883584-Appointments";
dotenv.config({});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.DB_PASSWORD,
  database: "appointment_scheduling",
  entities: [Users, Appointments, Treatments, Reviews],
  migrations: [Users1702930737798, Appointments1702931883584],
  synchronize: false,
  logging: false,
});
