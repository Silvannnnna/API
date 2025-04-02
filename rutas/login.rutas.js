import { Router } from "express";
import { login } from "../controladores/login.controlers.js";

const router = Router();

router.post("/login", login);

export default router;