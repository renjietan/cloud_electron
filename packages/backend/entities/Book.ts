import { Column, Entity } from "typeorm";

@Entity("book")
export class Book {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;
}
