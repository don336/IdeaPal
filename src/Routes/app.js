import express from "express";
import cors from "cors";
import connect from "../db/mongoos";
import Route from "./api-v1/routes";
import swaggerRouter from "./swaggerRoute";
connect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(Route);
app.use("/", swaggerRouter);
export default app;