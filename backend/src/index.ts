import "dotenv/config";

import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import indexRouter from "./routes/index";

const app = express();

app.use(morgan("dev"));
app.use(helmet());

app.use("/", indexRouter);

const port = 3000;
app.listen(port);
console.log(`Server started on port ${port}`);
