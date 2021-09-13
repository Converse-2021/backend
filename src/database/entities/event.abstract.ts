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

  @Column()
  enrollment2: string;

  @Column()
  firstName2: string;

  @Column()
  lastName2: string;

  @Column()
  email2: string;

  @Column()
  phoneNumber2: string;

  @Column()
  department2: string;

  @Column()
  year2: number;
}
