import { Entity } from "typeorm";
import { Event, EventWithMultipleParticipants } from "./event.abstract";

@Entity("ImageIT")
export class ImageIT extends Event {}

@Entity("PY_IT")
export class PyIT extends Event {}

@Entity("IT_QUIZ")
export class ITQuiz extends Event {}

@Entity("WYSIWYG")
export class WYSIWYG extends Event {}

@Entity("Logo_Hunt")
export class LogoHunt extends Event {}

@Entity("CODE_DECODE")
export class CodeDecode extends EventWithMultipleParticipants {}
