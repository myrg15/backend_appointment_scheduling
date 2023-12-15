import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Appointments } from "../models/Appointments";
import { Reviews } from "./Reviews";

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

  
  @OneToMany(() => Reviews, review => review.treatments)
  reviews! : Reviews[]

  @ManyToMany(() => Appointments)
  @JoinTable({
    name: "treatment",
  })
  appointment!: Appointments[];
}
