import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users.entity";

@Index("IDX_4810bc474fe6394c6f58cb7c9e", ["roleName"], { unique: true })
@Index("role_name", ["roleName"], { unique: true })
@Entity("role", { schema: "sisinfo" })
export class Role {
  @PrimaryGeneratedColumn({ type: "int", name: "role_id" })
  roleId: number;

  @Column("varchar", { name: "role_name", unique: true, length: 25 })
  roleName: string;

  @ManyToMany(() => Users, (users) => users.roles)
  @JoinTable({
    name: "usersrole",
    joinColumns: [{ name: "role_id", referencedColumnName: "roleId" }],
    inverseJoinColumns: [
      { name: "user_uuid", referencedColumnName: "userUuid" },
    ],
    schema: "sisinfo",
  })
  users: Users[];
}
