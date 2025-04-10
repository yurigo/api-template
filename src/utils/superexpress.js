import express from "express";

import {
  createRestServer,
  createHealthCheckServer,
} from "../rest/restService.js";

import {
  createGraphQLServer,
  createGraphiQLServer,
} from "../graphql/graphqlService.js";

Object.assign(express.application, {
  createRestServer,
  createHealthCheckServer,
  createGraphQLServer,
  createGraphiQLServer,
});

export default express;
