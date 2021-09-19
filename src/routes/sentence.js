import controllerSentence from '../controller/sentence';

export default function (app, db, services) {
  const sentenceController = controllerSentence(services, db);
  const router = app.Router();

  router.post('/list', sentenceController.sentenceList);
  return router;
}