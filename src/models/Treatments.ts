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

  /*@Column()
  review_Id!: number;*/

  /* @Column()
  appointment_Id!: number;*/

  @Column()
  name_treatment!: string;

  @Column()
  description!: string;

  @Column()
  duration_treatment!: string;

  @Column()
  img_url!: string;

  @Column({ default: "active" })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  /*@OneToMany(() => Reviews, (review) => review.treatment)
  reviews!: Reviews[];

  @ManyToMany(() => Appointments)
  @JoinTable({
    name: "treatment",
  })
  appointment!: Appointments[];*/
}
