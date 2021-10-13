import controller from '../controller/language/language';

export default function (app, db, services) {
  const router = app.Router();
  const languageController = controller(db, services);

  router.post('/create', languageController.create);
  router.post('/list', languageController.list);
  return router;
}
