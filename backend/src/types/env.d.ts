declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    ALLOW_ORIGIN: string;
  }
}
