import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL ?? "http://localhost:3000"
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);

export default app;
