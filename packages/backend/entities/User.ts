import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "username", nullable: true })
  username: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;
}
