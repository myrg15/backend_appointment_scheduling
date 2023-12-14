import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments";
import { Treatments } from "./Treatments";

@Entity("appointment_treatment")
export class AppointmentTreatment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    appointments!: number;

    @Column()
    treatments!: number;

    @ManyToOne(() => Appointments, (appointments) => appointments.id)
    @JoinColumn ({name: "appointments_Id"})
    appointment!: Appointments;
  
    @ManyToOne(() => Treatments, (treatments) => treatments.id)
    @JoinColumn({name: "treatments_Id"})
    treatment!: Treatments;

}
