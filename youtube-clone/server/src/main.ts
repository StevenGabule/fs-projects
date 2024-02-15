import express from 'express'
import logger from "./utils/logger";
import {connectToDatabase, disconnectFromDatabase} from "./utils/database";
import cookieParser from "cookie-parser";
import cors from "cors";
import {CORS_ORIGIN} from "./constants";
import helmet from "helmet";
import userRoute from './modules/user/user.route'

const port = process.env.PORT || 4000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: CORS_ORIGIN,
  credentials: true
}));
app.use(helmet());

app.use('/api/users', userRoute);

const server = app.listen(port, async () => {
  await connectToDatabase();
  logger.info(`[SERVER] is listening at http://localhost:${port}`)
})

const signals = ['SIGTERM', 'SIGINT'];

function gracefulShutDown(signal: string) {
  process.on(signal, async () => {
    server.close();

    // disconnect from the db
    await disconnectFromDatabase();

    process.exit(0)
  })
}

for (let i = 0; i < signals.length; i++) {
  gracefulShutDown(signals[i])
}