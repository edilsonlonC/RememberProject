import controllerUser from '../controller/user';

	export default function (app,db,services) {

		const userController = controllerUser(services,db);
		const router = app.Router()

		router.post('/create', userController.userCreate)
		return router;

}
