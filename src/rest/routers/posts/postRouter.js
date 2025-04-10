import { Router } from "express";
import * as controller from "../../controllers/posts/post.controller.js";

const router = Router();

router.get("/", controller.all);
router.get("/:id", controller.get);

export default router;
