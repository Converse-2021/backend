import { Router, Request, Response } from "express";
import {
  Event,
  EventWithMultipleParticipants
} from "../database/entities/event.abstract";
import { EventsService } from "../services";
import { PostgresErrorCode, isQueryFailedError } from "../util/psqlErrors";
import { QueryFailedError } from "typeorm";
import { ImageIT } from "../database/entities/events.entity";
// type AllEntity = ImageIT | PyIT | CodeDecode | ITQuiz | LogoHunt | WYSIWYG;

export class EventController {
  public router: Router;
  private eventsService: EventsService;

  constructor() {
    this.router = Router();
    this.eventsService = new EventsService();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    res.send("index");
  };

  public fetchAll = async (req: Request, res: Response) => {
    const eventName: string = req.params.eventName;
    const users = await this.eventsService.fetchAll(eventName);
    res.json(users.length > 0 ? users : "No users found");
  };

  public register = async (req: Request, res: Response) => {
    const eventName: string = req.params.eventName;
    const event: Event | EventWithMultipleParticipants | ImageIT = req.body;
    console.log(
      "🚀 ~ file: index.ts ~ line 33 ~ EventController ~ register= ~ req.body",
      event
    );
    try {
      const newUser = await this.eventsService.create(eventName, event);
      res.json({ event: eventName, ...newUser });
    } catch (error) {
      if (isQueryFailedError(error)) {
        if (error?.code === PostgresErrorCode.UniqueViolation) {
          return res.status(400).json({
            eventName,
            event,
            message: "User already Exists"
          });
        }
      }
      return res.status(404).json({
        event: event,
        message: error
      });
    }
  };

  public routes() {
    this.router.get("/:eventName", this.fetchAll);
    this.router.post("/:eventName", this.register);
  }
}
