import { Router } from "express";
import userDAO from "../../../dao/userDAO.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(userDAO.all());
});

export default router;
