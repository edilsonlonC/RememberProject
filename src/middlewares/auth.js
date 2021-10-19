import response from '../helper/response';
import responseError from '../helper/error';

export default function (db, services) {
  const { User } = db;
  return {
    login: async (req, res, next) => {
      const {
        data: { email, password },
      } = req.body;
      try {
        const user = await User.findOne({
          where: { email },
        });
        if (!user)
          return response(
            res,
            req
          )({
            data: null,
            error: new responseError('not.authorized'),
          });
      } catch (error) {
        return next(error);
      }
    },
    checkAuth: async (req, res, next) => {},
    logout: async (req, res, next) => {},
  };
}
