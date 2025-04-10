import chalk from "chalk";
import { json } from "express";
import mainRouter from "./routers/apiRouter.js";
import healthCheckRouter from "./routers/healthCheckRouter.js";

export function createRestServer() {
  // console.log(chalk.blue(" + "), "Creating REST API");
  this.use("/api", json());
  this.use("/api", mainRouter);
  console.log(
    chalk.green("+"),
    chalk.white(`REST API is available at ${this.get("url")}/api`)
  );
  return this;
}

export function createHealthCheckServer() {
  // console.log(chalk.blue(" + "), "Creating Health Check API");
  this.use("/health", healthCheckRouter);
  console.log(
    chalk.green("+"),
    chalk.white(`Health Check API is available at ${this.get("url")}/health`)
  );
  return this;
}
