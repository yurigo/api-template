import { Router } from "express";
import userRouter from "./users/userRouter.js";
import postRouter from "./posts/postRouter.js";

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

router.get("/", (req, res) => {
  res.json({
    users: req.app.get("url") + "/api/users",
    posts: req.app.get("url") + "/api/posts",
  });
});

export default router;
