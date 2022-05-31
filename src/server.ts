import "reflect-metadata";
import express from "express";
import SwaggerUI from "swagger-ui-express";

import { router } from "./routes";
import swaggerJson from "./swagger.json";
import "./shared/container";

import "./database";

const app = express();
app.use(express.json());

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerJson));
app.use(router);

app.listen(3333, () => console.log("The server is running"));
