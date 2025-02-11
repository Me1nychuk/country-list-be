import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";

import morgan from "morgan";
import cors from "cors";
import mainRouter from "./routes/mainRouter";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/countries/", mainRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running. Use our API on port: " + port);
});
