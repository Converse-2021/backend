import express, { Request, Response } from "express";
import { EventController } from "./controllers";
import { ConnectionOptions, createConnection } from "typeorm";
import cors from "cors";
import tokenChecker from "./middlewares/tokenChecker";
import dotenv from "dotenv";

class Server {
  private app: express.Application;
  private eventController: EventController;

  constructor() {
    this.app = express();
    // App init
    this.configuration();
    this.app.use(cors());
    this.app.use(express.json());
    dotenv.config();
    this.app.use(tokenChecker);
    this.routes();
  }

  public configuration() {
    this.app.set("port", process.env.PORT || 3001);
  }

  public async routes() {
    try {
      let connectionOptions: ConnectionOptions;
      console.log([__dirname + "/../**/*.entity.{js,ts}"]);

      connectionOptions = {
        type: "postgres",
        // host: "localhost",
        // port: 5433,
        // username: "converse",
        // password: "converse",
        // database: "converse",

        entities: [__dirname + "/../**/*.entity.{js,ts}"],
        synchronize: process.env.DATABASE_URL ? false : true,
        name: "converse"
      };

      if (process.env.DATABASE_URL) {
        Object.assign(connectionOptions, {
          url: process.env.DATABASE_URL,
          ssl: true,
          extra: {
            ssl: {
              rejectUnauthorized: false
            }
          }
        });
        console.log("CONNECTED SUCCESSFULLY: " + process.env.DATABASE_URL);
      } else {
        Object.assign(connectionOptions, {
          host: "localhost",
          port: 5433,
          username: "converse",
          password: "converse",
          database: "converse"
        });
      }

      let connection = await createConnection(connectionOptions);

      // console.log(
      //   "🚀 ~ file: server.ts ~ line 33 ~ Server ~ routes ~ connection",
      //   connection
      // );
    } catch (error) {
      console.log(error);
    }

    this.eventController = new EventController();
    this.app.use("/api/register", this.eventController.router);
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World");
    });
  }

  public start() {
    const port = this.app.get("port");
    this.app.listen(port, () => {
      console.log(`Server is running on ${port} port`);
    });
  }
}

export default Server;
