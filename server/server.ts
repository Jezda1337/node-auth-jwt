import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "hello World" });
});

app.listen(process.env.PORT ?? "3000", () =>
  console.log("server is running on port 3000")
);
