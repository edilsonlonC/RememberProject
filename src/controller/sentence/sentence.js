import response from '../../helper/response';

export default function (services, db) {
  const { Sentence } = db;
  return {
    sentenceCreate: async (req, res, next) => {
      try {
        const {
          body: { data },
        } = req;
        const sentenceToSave = req.filterData(data, [
          'name',
          'sentence',
          'description',
          'userId',
        ]);
        const sentence = await Sentence.create(sentenceToSave);
        return response(
          res,
          req
        )({
          data: { Sentence: sentence },
          message: req.translate('sentence.created'),
        });
      } catch (error) {
        next(error)      
      }
    },
    sentenceList: async (req, res, next) => {
     const Filter = req.body.data?.Filter 
      try {
        const filters = ['sentence', 'userId', 'id', 'name'];
        const filtersValidated = req.filterData(Filter, filters);
        const queryBuilder = {
          where: filtersValidated,
        };
        const sentences = await Sentence.findAll(queryBuilder);
        return response(
          res,
          req
        )({
          data: { Sentences: sentences },
          message: req.translate('senteces.list'),
        });
      } catch (error) {
        return next(error);
      }
    },
    sentenceUpdate: async (req, res, next) => {
      const { data } = req.body;
      try {
        const { id } = data;
        const dataToUpdate = ['sentence', 'name'];
        const FilteredData = req.filterData(data, dataToUpdate);
        await Sentence.update(FilteredData, { where: { id } });
        return response(
          res,
          req
        )({
          message: req.translate('sentence.updated'),
          data: null,
        });
      } catch (error) {
        return next(error);
      }
    },
  };
}
