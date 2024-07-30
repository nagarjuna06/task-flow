import express from "express";
import router from "./routes";
import settings from "./config";
import connectDB from "./clients/db";
import cors from "cors";

const initServer = () => {
  const app = express();

  app.use(express.json());
  app.use(
    cors({
      origin: settings.allow_origin,
    })
  );
  connectDB();

  app.use(router);

  app.listen(settings.port, () =>
    console.log(`Server started at http://localhost:${settings.port}`)
  );
};

initServer();
