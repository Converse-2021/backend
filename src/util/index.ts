import {
  ImageIT,
  CodeDecode,
  ITQuiz,
  LogoHunt,
  PyIT,
  WYSIWYG
} from "../database/entities/events.entity";

export function fetchEntityFromEvent(event: string) {
  switch (event.toLowerCase()) {
    case "imageit":
      return ImageIT;
    case "codedecode":
      return CodeDecode;
    case "itquiz":
      return ITQuiz;
    case "logohunt":
      return LogoHunt;
    case "pyit":
      return PyIT;
    case "wysiwyg":
      return WYSIWYG;

    default:
      throw Error("Entity not found");
  }
}

export function fetchEntityRepoFromEvent(event: string) {
  switch (event.toLowerCase()) {
    case "imageit":
      return "imageITRepo";
    case "codedecode":
      return "codeDecodeRepo";
    case "itquiz":
      return "itQuizRepo";
    case "logohunt":
      return "logohuntRepo";
    case "pyit":
      return "pyitRepo";
    case "wysiwyg":
      return "wysiwygRepo";

    default:
      throw Error("Entity not found");
  }
}
