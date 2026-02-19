import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/authMiddleware";

const roleWidgets: Record<string, string[]> = {
  admin: ["User Management", "System Metrics", "Audit Logs"],
  manager: ["Team Overview", "Task Pipeline", "Performance Snapshot"],
  user: ["My Tasks", "Recent Activity", "Support Center"]
};

export const dashboardData = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  if (!req.user) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const widgets = roleWidgets[req.user.role] ?? roleWidgets.user;

  res.status(200).json({
    message: `Welcome to ${req.user.role} dashboard`,
    role: req.user.role,
    widgets
  });
};
