import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments";
import { Treatments } from "./Treatments";

@Entity("appointment_treatment")
export class AppointmentTreatment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    appointments!: number;

    @Column()
    treatments!: number;

    @ManyToOne(() => Appointments, (appointments) => appointments.appointment_treatment)
    @JoinColumn ({name: "id"})
    appointment!: Appointments;
  
    @ManyToOne(() => Treatments, (treatments) => treatments.appointment_treatment)
    @JoinColumn({name: "id"})
    treatment!: Treatments;

}
