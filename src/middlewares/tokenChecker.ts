import { Request, Response, NextFunction } from "express";

const tokenChecker = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.header("authorization") as string;
  // console.log(token);
  // console.log(process.env.AUTH_TOKEN);
  // console.log(
  //   "🚀 ~ file: tokenChecker.ts ~ line 9 ~ tokenChecker ~ process.env.AUTH_TOKEN",
  //   process.env.AUTH_TOKEN
  // );

  if (typeof token !== "undefined" && token === process.env.AUTH_TOKEN) {
    console.log("Authorized User");

    next();
  } else {
    console.log("Unauthorized User");

    res.status(401).json({
      ok: false,
      error: "Unauthorized User"
    });
  }
};

export default tokenChecker;
