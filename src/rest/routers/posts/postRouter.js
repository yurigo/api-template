import { Router } from "express";
import postDAO from "../../../dao/postDAO.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(postDAO.all());
});

export default router;
