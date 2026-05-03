import "dotenv/config";

import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler } from "./middleware/errorHandler";
import { notFoundErrorHandler } from "./middleware/notFoundErrorHandler";
import { zodErrorHandler } from "./middleware/zodErrorHandler";
import indexRouter from "./routes/index";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use("/", indexRouter);
app.use(zodErrorHandler);
app.use(notFoundErrorHandler);
app.use(errorHandler);

const port = 3000;
app.listen(port);
console.log(`Server started on port ${port}`);
