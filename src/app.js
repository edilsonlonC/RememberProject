import express from 'express';
import morgan from 'morgan';
import { config } from './config/config';
import Routes from './routes';
import Database from './models';
import langs from './middlewares/langs';
import filterData from './middlewares/check-filters';
import _404 from './middlewares/_404';
import error from './middlewares/error';
const { port } = config;

/** Instances * */

const app = express();
const db = new Database();
const { versionApi } = config;
const routes = new Routes(express, db, null);
const router = express.Router();
/**  Middleware * */
app.use(express.json());
app.use(morgan('dev'));
app.use(langs());
app.use(filterData());

/** Routes * */
router.use('/users', routes.User);
router.use('/sentences', routes.Sentence);
router.use('/languages', routes.Language);
app.use(versionApi, router);

app.use(_404);
app.use(error)
app.listen(port, () => {});
export default app;
