import response from '../helper/response';
import ResponseError from '../helper/error';

export default function (db, services) {
  const { Language } = db;

  return {
    create: async (req, res, next) => {
      const { data } = req.body;
      try {
        const dataLanguage = req.filterData(data, ['name', 'decription']);
        const language = await Language.create(dataLanguage);
        return response(
          res,
          req
        )({
          data: { Language: language },
          message: 'Language.create',
        });
      } catch (error) {
        return next(error);
      }
    },
    list: async (req, res, next) => {
      try {
        const languages = await Language.findAll({});
        return response(
          res,
          req
        )({
          message: 'languages.list',
          data: { Languages: languages },
        });
      } catch (error) {
        return next(e);
      }
    },
  };
}
