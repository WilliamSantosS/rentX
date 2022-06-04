import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import SwaggerUI from "swagger-ui-express";

import "./shared/container";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerJson from "./swagger.json";
import "./database";

const app = express();
app.use(express.json());

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerJson));
app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }
    return response
      .status(500)
      .json({ message: `Internal Server Error: ${error.message}` });
  }
);

app.listen(3333, () => console.log("The server is running"));
