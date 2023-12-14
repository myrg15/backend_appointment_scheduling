import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { Reviews } from "../models/Reviews";
import { Appointments } from "./Appointments";

@Entity("treatment")
export class Treatments extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    reviews_Id!: number;
   
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
    date!: Date
    
    @Column()
    time!: string

    @CreateDateColumn()
    createdDate!: Date;
  
    @UpdateDateColumn()
    updatedDate!: Date;

    @OneToMany(() => Reviews, (reviews) => reviews.treatment)
    reviews!: Reviews[];
  

    @ManyToMany(()  => Appointments )
    @JoinTable({
      name: "appointment_treatment"
      })
      appointment!: Appointments [];
}
