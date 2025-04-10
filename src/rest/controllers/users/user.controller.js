import { bus } from "../../../listeners/bus.js";
import * as dao from "../../../dao/user.dao.js";

export const all = (req, res, next) => {
  // 🔥 Emit an event.
  bus.emit("users.all", req);

  //res.json(req.app.get("dao").all());
  res.json(dao.all());
};

export const get = (req, res, next) => {
  // const user = req.app.get("dao").get(req.params.id);
  const user = dao.get(req.params.id);
  if (!user) return next({ event: "users.get", error: "User not found" });

  // 🔥 Emit an event.
  bus.emit("users.get", user);
  res.json(user);
};
