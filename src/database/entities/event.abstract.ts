import { Column, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Unique(["enrollment"])
export abstract class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  enrollment: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  department: string;

  @Column()
  year: number;
}

@Unique(["enrollment2"])
export abstract class EventWithMultipleParticipants extends Event {
  @PrimaryGeneratedColumn()
  id2: number;

  @Column({ nullable: true })
  enrollment2: string;

  @Column({ nullable: true })
  firstName2: string;

  @Column({ nullable: true })
  lastName2: string;

  @Column({ nullable: true })
  email2: string;

  @Column({ nullable: true })
  phoneNumber2: string;

  @Column({ nullable: true })
  department2: string;

  @Column({ nullable: true })
  year2: number;
}
