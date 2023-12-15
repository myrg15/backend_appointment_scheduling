import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Appointments } from "../models/Appointments";

@Entity("treatment")
export class Treatments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  appointment_Id!: number;

  @Column()
  name_treatment!: string;

  @Column()
  description!: string;

  @Column()
  duration_treatment!: string;

  @Column()
  img_url!: string;

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

  @ManyToMany(() => Appointments)
  @JoinTable({
    name: "treatment",
  })
  appointment!: Appointments[];
}
