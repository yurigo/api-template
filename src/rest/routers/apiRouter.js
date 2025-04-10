import { Router } from "express";
import userRouter from "./users/userRouter.js";
import postRouter from "./posts/postRouter.js";
import { generalErrorMiddleware } from "../../middlewares/errors/error.middleware.js";

const router = Router();

router.use("/users", userRouter);
router.use("/posts", postRouter);

router.get("/", (req, res) => {
  // @TODO automatizar HATEOAS
  res.json({
    users: req.app.get("url") + "/api/users",
    posts: req.app.get("url") + "/api/posts",
  });
});

router.use(generalErrorMiddleware);

export default router;
