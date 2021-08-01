import express from 'express';
import morgan from 'morgan';
import { config } from './config/config';
const port = config.port

const app = express();

/**  Middleware **/
app.use(morgan('dev'))
app.listen(port, () => {});
export default app;
