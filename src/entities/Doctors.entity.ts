import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Appointments } from "./Appointments.entity";
import { Doctorinstitution } from "./Doctorinstitution.entity";
import { Users } from "./Users.entity";
import { Doctorschedule } from "./Doctorschedule.entity";
import { Specialists } from "./Specialists.entity";

@Index("Doctors_index_6", ["userUuid"], { unique: true })
@Index("IDX_42d5b13afdcdff142b84709706", ["userUuid"], { unique: true })
@Index("user_uuid", ["userUuid"], { unique: true })
@Entity("doctors", { schema: "sisinfo" })
export class Doctors {
  @Column("char", { primary: true, name: "doctor_uuid", length: 36 })
  doctorUuid: string;

  @Column("char", { name: "user_uuid", unique: true, length: 36 })
  userUuid: string;

  @Column("int", { name: "years_of_experience" })
  yearsOfExperience: number;

  @OneToMany(() => Appointments, (appointments) => appointments.doctorUu)
  appointments: Appointments[];

  @OneToMany(
    () => Doctorinstitution,
    (doctorinstitution) => doctorinstitution.doctorUu
  )
  doctorinstitutions: Doctorinstitution[];

  @OneToOne(() => Users, (users) => users.doctors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_uuid", referencedColumnName: "userUuid" }])
  userUu: Users;

  @OneToMany(() => Doctorschedule, (doctorschedule) => doctorschedule.doctorUu)
  doctorschedules: Doctorschedule[];

  @OneToMany(() => Specialists, (specialists) => specialists.doctorUu)
  specialists: Specialists[];
}
