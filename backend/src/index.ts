import express from "express";
import router from "./routes";
import settings from "./config";
import connectDB from "./clients/db";
import errorHandler from "./middleware/error";

const app = express();

app.use(express.json());

connectDB();
app.use(router);

app.listen(settings.port, () =>
  console.log(`Server started at http://localhost:${settings.port}`)
);

app.use(errorHandler);
