import controllerUser from '../controller/user/user';
import validatorUser from '../validators/user';

export default function (app, db, services) {
  const userController = controllerUser(services, db);
  const validator = validatorUser(services, db);
  const router = app.Router();

  router.post('/create', validator.userCreate, userController.userCreate);
  return router;
}
