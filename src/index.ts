import "dotenv/config";
import db from "~/db";
import cors from "cors";
import env from "~/config";
import appointments from "~/routes";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";

(async () => {
  try {
    const app = express();
    await db.init();

    app.use(
      cors({
        origin: [env.FRONTEND_URI],
        credentials: true,
      })
    );

    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api/v1/appointments/", appointments);

    app.use((err: Error, _: Request, res: Response) => {
      res.status(500).json({
        message: err instanceof Error ? err.message : "Unknown error",
      });
    });

    app.listen(env.PORT, async () => {
      console.log("Server Status: ✅");
      console.log("DB Status:", db.isConnected ? "✅" : "❌");
    });
  } catch (error) {
    console.error("❌ Error:", error);
  }
})();
