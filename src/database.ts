import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { Users1702758073587 } from "./migration/1702758073587-Users";
import { Appointments1702654139564 } from "./migration/1702654139564-Appointments";
import { Treatments1702656982301 } from "./migration/1702656982301-Treatments";
import { Reviews1702657687855 } from "./migration/1702657687855-Reviews";
import { Users } from "./models/Users";
import { Appointments } from "./models/Appointments";
import { Treatments } from "./models/Treatments";
import { Reviews } from "./models/Reviews";
//require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Appointments, Treatments, Reviews],
  migrations: [
    Users1702758073587,
    Appointments1702654139564,
    Treatments1702656982301,
    Reviews1702657687855,
  ],
  synchronize: false,
  logging: false,
});
