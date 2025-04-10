import chalk from "chalk";
import EventEmitter from "eventemitter3";

// @TODO refactor

class WildcardEmitter extends EventEmitter {
  emit(event, ...args) {
    // Emitir el evento original
    super.emit(event, ...args);

    // Emitir wildcards por prefijo (por ejemplo error.*)
    const parts = event.split(".");
    while (parts.length > 1) {
      parts.pop();
      const wildcardEvent = parts.join(".") + ".*";
      if (this.listeners(wildcardEvent).length > 0) {
        super.emit(wildcardEvent, event, ...args);
      }
    }

    // Emitir wildcard '*' (todo)
    if (this.listeners("*").length > 0) {
      super.emit("*", event, ...args);
    }
  }
}

export const bus = new WildcardEmitter();

// 🔥 wildcard!
bus.on("*", (event, ...args) => {
  console.log(chalk.bgBlue("Event emitted: " + event));
});

bus.on("healthCheck", (req) => {
  console.log("Health check event received:", req.method, req.url);
  // You can add more logic here, like logging to a file or sending an alert
});

bus.on("users.all", () => {
  console.log(chalk.yellow("All users requested"));
});

bus.on("users.get", (user) => {
  console.log(chalk.yellow("Users requested:", user.id, user.name));
});

bus.on("users.created", (user) => {
  console.log("User created event received:", user);
  // You can add more logic here, like sending a welcome email
});

// 🔥 wildcard!
bus.on("error.*", (event, ...args) => {
  console.log(
    chalk.white.bold.bgRed(
      "Event emitted (error.*):",
      event,
      JSON.stringify(args)
    )
  );
  // You can add more logic here, like logging to a file or sending an alert
});

bus.on("error.general", (error) => {
  console.error(
    chalk.white.bold.bgYellow("Event emitted: ", "error.general", error.event)
  );
  // You can add more logic here, like logging to a file or sending an alert
});
