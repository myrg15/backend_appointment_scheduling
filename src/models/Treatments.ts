import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany } from "typeorm"
import { Reviews } from "../models/Reviews";
import { Appointments } from "./Appointments";

@Entity("treatments")
export class Treatments extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
   
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

    @CreateDateColumn()
    createdDate!: Date;
  
    @UpdateDateColumn()
    updatedDate!: Date;

    @OneToMany(() => Reviews, (reviews) => reviews.treatments)
    reviews!: Reviews[];
  
    @ManyToOne(() => Appointments, (appointments) => appointments.treatments) 
    appointments!:Appointments[];
}
