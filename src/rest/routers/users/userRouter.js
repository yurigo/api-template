import { Router } from "express";
import { all, get } from "../../controllers/users/user.controller.js";

const router = Router();

router.get("/", all);
router.get("/:id", get);

export default router;
