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
export class Appointments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_Id!: number;

  @Column()
  appointmentTreatment_Id!: number;

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
  @JoinColumn({ name: "user_Id" })
  user!: Users;

  @ManyToOne(() => AppointmentTreatment, (appointment_treatment) => appointment_treatment.appointments)
  @JoinColumn({ name: "appointmentTreatment_Id" })
  appointment_treatments!: AppointmentTreatment;

}
