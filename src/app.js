import express from 'express';
import morgan from 'morgan';
import { config } from './config/config';
import Routes from './routes';
import Database from './models';
import langs from './middlewares/langs'
const { port } = config;

const app = express();
const db = new Database();
/** Instances * */
const { versionApi } = config;
const routes = new Routes(express, db, null);
const router = express.Router();
/**  Middleware * */
app.use(express.json())
app.use(morgan('dev'));
app.use(langs())

/** Routes * */
router.use('/users', routes.User);
app.use(versionApi, router);
app.listen(port, () => {});
export default app;
