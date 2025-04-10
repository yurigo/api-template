import chalk from "chalk";
import { typedefs } from "./typedefs.js";
import { resolvers } from "./resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";

// Construct a schema, using GraphQL schema language
const schema = makeExecutableSchema({
  typeDefs: typedefs,
  resolvers: resolvers,
});

export function createGraphQLServer() {
  // console.log(chalk.blue(" + "), "Creating GraphQL API");

  this.all(
    "/graphql",
    createHandler({
      schema: schema,
    })
  );
  console.log(
    chalk.green("+"),
    chalk.white(`GraphQL API is available at ${this.get("url")}/graphql`)
  );
  return this;
}

export function createGraphiQLServer() {
  // console.log(chalk.blue(" + "), "Creating GraphiQL IDE");

  this.get("/ruru", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
  });

  console.log(
    chalk.green("+"),
    chalk.white(`GraphiQL IDE is available at ${this.get("url")}/ruru`)
  );

  return this;
}
