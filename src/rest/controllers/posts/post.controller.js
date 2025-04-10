import { bus } from "../../../listeners/bus.js";
import * as dao from "../../../dao/post.dao.js";

export const all = async (req, res) => {
  // 🔥 Emit an event.
  bus.emit("posts.all", req);

  //res.json(req.app.get("dao").all());
  res.json(dao.all());
};

export const get = async (req, res, next) => {
  // const post = req.app.get("dao").get(req.params.id);
  const post = dao.get(req.params.id);
  if (!post) return next({ event: "posts.get", error: "Post not found" });

  // 🔥 Emit an event.
  bus.emit("posts.get", req);
  res.json(post);
};
