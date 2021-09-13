import { Connection, getConnection } from "typeorm";
import {
  ImageITRepo,
  CodeDecodeRepo,
  ITQuizRepo,
  LogoHuntRepo,
  PyITRepo,
  WYSIWYGRepo
} from "../repository/EventRepository";
import {
  Event,
  EventWithMultipleParticipants
} from "../database/entities/event.abstract";

import Server from "../server";

export class EventsService {
  private imageITRepo: ImageITRepo;
  private codeDecodeRepo: CodeDecodeRepo;
  private itQuizRepo: ITQuizRepo;
  private wysiwygRepo: WYSIWYGRepo;
  private pyitRepo: PyITRepo;
  private logohuntRepo: LogoHuntRepo;

  constructor() {
    this.imageITRepo = getConnection(
      Server.connection.name
    ).getCustomRepository(ImageITRepo);
    this.codeDecodeRepo = getConnection(
      Server.connection.name
    ).getCustomRepository(CodeDecodeRepo);
    this.itQuizRepo = getConnection(Server.connection.name).getCustomRepository(
      ITQuizRepo
    );
    this.wysiwygRepo = getConnection(
      Server.connection.name
    ).getCustomRepository(WYSIWYGRepo);
    this.pyitRepo = getConnection(Server.connection.name).getCustomRepository(
      PyITRepo
    );
    this.logohuntRepo = getConnection(
      Server.connection.name
    ).getCustomRepository(LogoHuntRepo);
  }

  public fetchAll = async (eventName: string) => {
    switch (eventName.toLowerCase()) {
      case "imageit":
        return await this.imageITRepo.find();

      case "codedecode":
        return await this.codeDecodeRepo.find();

      case "itquiz":
        return await this.itQuizRepo.find();

      case "logohunt":
        return await this.logohuntRepo.find();

      case "pyit":
        return await this.pyitRepo.find();

      case "wysiwyg":
        return await this.wysiwygRepo.find();

      default:
        throw Error("Entity not found");
    }
  };

  public create = async (
    eventName: string,
    event: Event | EventWithMultipleParticipants
  ) => {
    // this.connection.createQueryBuilder().insert().into(this.imageITRepo.target);

    switch (eventName.toLowerCase()) {
      case "imageit":
        return await this.imageITRepo.save(event);

      case "codedecode":
        return await this.codeDecodeRepo.save(event);

      case "itquiz":
        return await this.itQuizRepo.save(event);

      case "logohunt":
        return await this.logohuntRepo.save(event);

      case "pyit":
        return await this.pyitRepo.save(event);

      case "wysiwyg":
        return await this.wysiwygRepo.save(event);

      default:
        throw Error("Entity not found");
    }
  };
}
