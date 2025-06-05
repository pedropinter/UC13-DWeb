import express, { Application } from "express";
import userRoutes from "./routes/user.routes"
import { AppDataSource } from "./database/data-source";

const app: Application = express();

app.use(express.json())
app.use('/api',userRoutes)

AppDataSource.initialize