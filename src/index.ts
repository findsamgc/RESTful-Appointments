import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import env from "~/config";
import appointments from "~/routes";
import db from "~/db";

(async () => {
  try {
    const PORT = env.PORT;
    const app = express();
    await db.init();

    app.use(
      cors({
        origin: ["localhost:3000"],
        credentials: true,
      })
    );

    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1/appointments/", appointments);

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(500).json({
        message: err instanceof Error ? err.message : "Unknown error",
      });
    });

    app.listen(PORT, async () => {
      console.log("SERVER: ✅");
      console.log("DATABASE:", db.isConnected ? "✅" : "❌");
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
})();
