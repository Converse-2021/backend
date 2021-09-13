import { EntityRepository, Repository } from "typeorm";
import {
  ImageIT,
  CodeDecode,
  ITQuiz,
  LogoHunt,
  PyIT,
  WYSIWYG
} from "../database/entities/events.entities";

@EntityRepository(ImageIT)
export class ImageITRepo extends Repository<ImageIT> {}

@EntityRepository(ITQuiz)
export class ITQuizRepo extends Repository<ITQuiz> {}

@EntityRepository(LogoHunt)
export class LogoHuntRepo extends Repository<LogoHunt> {}

@EntityRepository(WYSIWYG)
export class WYSIWYGRepo extends Repository<WYSIWYG> {}

@EntityRepository(PyIT)
export class PyITRepo extends Repository<PyIT> {}

@EntityRepository(CodeDecode)
export class CodeDecodeRepo extends Repository<CodeDecode> {}
