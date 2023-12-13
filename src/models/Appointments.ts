import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Users } from "../models/Users";
import { AppointmentTreatment } from "./AppointmentTreatment";

@Entity("appointments")
export class Appointments {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  users!: number;

  @Column()
  appointment_treatment!: number;

  @Column()
  status!: string;

  @Column()
  date!: Date;

  @Column()
  time!: string;

  @CreateDateColumn()
  createdDate!: Date;

  @UpdateDateColumn()
  updatedDate!: Date;

  @ManyToOne(() => Users, (users) => users.appointments)
  @JoinColumn({ name: "users" })
  user!: Users;

  @ManyToOne(() => AppointmentTreatment, (appointment_treatment) => appointment_treatment.appointments)
  @JoinColumn({ name: "appointment_treatment" })
  appointment_treatments!: AppointmentTreatment;

}
