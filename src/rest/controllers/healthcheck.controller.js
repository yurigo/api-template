import { bus } from "../../listeners/bus.js";

export const ok = (req, res) => {
  // 🔥 Emit an event.
  bus.emit("healthCheck", req);

  res.send("ok");
};
