import {
  createRestServer,
  createHealthCheckServer,
} from "./rest/restService.js";

import {
  createGraphQLServer,
  createGraphiQLServer,
} from "./graphql/graphqlService.js";

/**
 * This function improves the express instance by adding custom methods
 * @param {*} app the express instance
 * @returns an express instance with custom methods
 * @deprecated use superexpress.js instead
 */
export default function improve(app) {
  // bind this to the app instance
  console.log("improving express app...");
  app.createRestServer = createRestServer;
  app.createHealthCheckServer = createHealthCheckServer;
  app.createGraphQLServer = createGraphQLServer;
  app.createGraphiQLServer = createGraphiQLServer;

  return app;
}
