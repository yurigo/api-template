import { bus } from "../../listeners/bus.js";

export const generalErrorMiddleware = (error, _req, res, next) => {
  // Log the error to the console
  // console.error(error);

  // Send a generic error response to the client
  res.status(500).json({
    message: "An unexpected error occurred.",
    error: process.env.NODE_ENV === "development" ? error : undefined,
  });

  // Emit an event for the error
  bus.emit("error.general", error);

  // Call the next middleware in the stack
  return next("🔥");
};
