import express from 'express';
import morgan from 'morgan';
import { config } from './config/config';
const port = config.port

const app = express();
import Routes from './routes';
import db from './models'

/** Instances **/
const { versionApi } = config;
const routes = new Routes(express,db,null);
const router = express.Router()
/**  Middleware **/
app.use(morgan('dev'))

/** Routes **/
console.log(routes.User)
router.use('/users', routes.User);
app.use(versionApi, router)
app.listen(port, () => {});
export default app;
