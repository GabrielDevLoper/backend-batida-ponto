import express, { NextFunction, Request, Response } from "express"
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";

import "dotenv/config";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message, statusCode: err.statusCode });
    }

    return res.status(500).json({
        status: "Error",
        message: `Servidor interno error ${err.message}`
    });
});


export { app }