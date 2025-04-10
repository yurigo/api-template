import "dotenv/config";
// import chalk from "chalk";
import chalk from "./src/utils/superchalk.js"; // <-- custom chalk

// import express from "express";
// import improve from "./src/express-improve.js";
import express from "./src/utils/superexpress.js"; // <-- custom express

import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const PORT = process.env.PORT || 4000;
const URL = `http://localhost`;

// const app = improve(express());
const app = express(); // <-- usign custom express (superexpress.js)

app.set("port", PORT);
app.set("baseUrl", URL);
app.set("url", `${URL}:${PORT}`);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
// app.use(helmet());  // <-- collides with GraphiQL ❌
app.use(helmet({ contentSecurityPolicy: false })); // <-- disable CSP for GraphiQL ✔️

app.use(express.static("public"));

app
  .createRestServer()
  .createGraphQLServer()
  .createGraphiQLServer()
  .createHealthCheckServer();

app.listen(PORT);

console.log(
  chalk.rainbow(),
  chalk.rainbow("Server started!"),
  "🚀",
  chalk.wobniar()
);

console.log(chalk.blue(`Running a server at http://localhost:${PORT}`));
