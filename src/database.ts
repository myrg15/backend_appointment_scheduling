import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

import { Users } from "./models/Users";
import { Reviews } from "./models/Reviews";
import { Treatments } from "./models/Treatments";
import { Appointments } from "./models/Appointments";

dotenv.config({});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Appointments, Treatments, Reviews],
  synchronize: false,
  logging: false,
});
