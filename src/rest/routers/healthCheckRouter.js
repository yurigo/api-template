import { Router } from "express";
import { ok } from "../controllers/healthcheck.controller.js";

const router = Router();

router.get("/", ok);

export default router;
