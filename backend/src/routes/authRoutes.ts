import { Router } from "express";
import { login, profile, register } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, profile);

export default router;
