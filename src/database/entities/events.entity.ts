import { Entity } from "typeorm";
import { Event, EventWithMultipleParticipants } from "./event.abstract";
import { Column, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("ImageIT")
export class ImageIT extends EventWithMultipleParticipants {
  @Column({ nullable: true })
  type: string;
}

@Entity("PY_IT")
export class PyIT extends Event {}

@Entity("IT_QUIZ")
export class ITQuiz extends Event {}

@Entity("WYSIWYG")
export class WYSIWYG extends EventWithMultipleParticipants {}

@Entity("Logo_Hunt")
export class LogoHunt extends Event {}

@Entity("CODE_DECODE")
export class CodeDecode extends EventWithMultipleParticipants {}
