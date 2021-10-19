import response from '../../helper/response';

export default function (services, db) {

  const { User } = db;
  return {
    userCreate: async (req, res, next) => {
      try {
        const {
          body: { data },
        } = req;
        const userToSave = {
          email: data.email,
          userName: data.userName,
          password: data.password,
        };
        const user = await User.create(userToSave);
        return response(
          res,
          req
        )({
          data: null,
          message: req.translate('user.created'),
        });
      } catch (error) {
        return next(error);
      }
    },
  };
}
