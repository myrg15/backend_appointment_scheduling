import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany  } from "typeorm"
import { Reviews } from "../models/Reviews";
import { Appointments } from "../models/Appointments";
@Entity("users")
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    name!: string;
  
    @Column()
    last_name!: string;

    @Column()
    phone_number!: string;
  
    @Column()
    address!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    role!: string;

    @Column()
    status!: string;

    @CreateDateColumn()
    createdDate!: Date;
  
    @UpdateDateColumn()
    updatedDate!: Date;
  
    @OneToMany(() => Appointments, (appointments) => appointments.user)
    appointments!: Appointments[];
    
    @OneToMany(() => Reviews, (reviews) => reviews.user)
    reviews!: Reviews[];
}
