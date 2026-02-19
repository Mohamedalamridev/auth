import { Router } from "express";
import { dashboardData } from "../controllers/dashboardController";
import { authorize, protect } from "../middleware/authMiddleware";

const router = Router();

router.get("/", protect, authorize("admin", "manager", "user"), dashboardData);
router.get("/admin", protect, authorize("admin"), dashboardData);
router.get("/manager", protect, authorize("manager", "admin"), dashboardData);
router.get("/user", protect, authorize("user", "manager", "admin"), dashboardData);

export default router;
