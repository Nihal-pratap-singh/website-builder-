
import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();

await connectToDatabase();

// Allowed frontend URLs
const allowedOrigins = (process.env.ORIGINS || "")
  .split(",")
  .map(origin => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked CORS origin:", origin);
      callback(new Error("Origin not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Live!"));

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);

// Centralized error handler
app.use((err, _req, res, _next) => {
  console.error(`[Error] ${err.message}`);
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
