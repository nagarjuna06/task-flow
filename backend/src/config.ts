import { config } from "dotenv";

config();

const settings = {
  db_url: process.env.DB_URL || "",
  secret: process.env.SECRET || "",
  port: parseInt(process.env.PORT || "4000"),
};

export default settings;
