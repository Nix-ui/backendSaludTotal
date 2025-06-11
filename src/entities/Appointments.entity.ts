import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointmentmedicalanalysis } from "./Appointmentmedicalanalysis.entity";
import { State } from "./State.entity";
import { Doctors } from "./Doctors.entity";
import { Patients } from "./Patients.entity";
import { Speciality } from "./Speciality.entity";
import { Healthcareinstitution } from "./Healthcareinstitution.entity";
import { Medicalschedule } from "./Medicalschedule.entity";
import { Consultation } from "./Consultation.entity";

@Index("Appointments_index_16", ["doctorUuid", "appointmentDate"], {})
@Index(
  "Appointments_index_17",
  ["institutionUuid", "patientUuid", "stateId"],
  {}
)
@Index("patient_uuid", ["patientUuid"], {})
@Index("schedule_id", ["scheduleId"], {})
@Index("speciality_id", ["specialityId"], {})
@Index("state_id", ["stateId"], {})
@Entity("appointments", { schema: "sisinfo" })
export class Appointments {
  @PrimaryGeneratedColumn({ type: "int", name: "appointment_id" })
  appointmentId: number;

  @Column("char", { name: "institution_uuid", length: 36 })
  institutionUuid: string;

  @Column("char", { name: "patient_uuid", length: 36 })
  patientUuid: string;

  @Column("char", { name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("date", { name: "appointment_date" })
  appointmentDate: string;

  @Column("int", { name: "schedule_id" })
  scheduleId: number;

  @Column("int", { name: "state_id" })
  stateId: number;

  @Column("int", { name: "speciality_id" })
  specialityId: number;

  @OneToMany(
    () => Appointmentmedicalanalysis,
    (appointmentmedicalanalysis) => appointmentmedicalanalysis.appointment
  )
  appointmentmedicalanalyses: Appointmentmedicalanalysis[];

  @ManyToOne(() => State, (state) => state.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "state_id", referencedColumnName: "stateId" }])
  state: State;

  @ManyToOne(() => Doctors, (doctors) => doctors.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "doctor_uuid", referencedColumnName: "doctorUuid" }])
  doctorUu: Doctors;

  @ManyToOne(() => Patients, (patients) => patients.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "patient_uuid", referencedColumnName: "patientUuid" }])
  patientUu: Patients;

  @ManyToOne(() => Speciality, (speciality) => speciality.appointments, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "speciality_id", referencedColumnName: "specialityId" }])
  speciality: Speciality;

  @ManyToOne(
    () => Healthcareinstitution,
    (healthcareinstitution) => healthcareinstitution.appointments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "institution_uuid", referencedColumnName: "institutionUuid" },
  ])
  institutionUu: Healthcareinstitution;

  @ManyToOne(
    () => Medicalschedule,
    (medicalschedule) => medicalschedule.appointments,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "schedule_id", referencedColumnName: "scheduleId" }])
  schedule: Medicalschedule;

  @OneToMany(() => Consultation, (consultation) => consultation.appointment)
  consultations: Consultation[];
}
