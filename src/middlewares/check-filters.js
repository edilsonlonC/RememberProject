export default () => {
  return function (req, res, next) {
    /**
     * @param { object } filter -  object with filter
     * @param { array } filters - name of filters to validate
     * */
    const filterData = (filter, filters) => {
      const filterValues = Object.keys(filter);
      const filterValidated = filterValues.reduce((previous, current) => {
        if (filters.includes(current)) previous[current] = filter[current];
        return previous;
      }, {});
      return filterValidated;
    };
    req.filterData = filterData;
    return next();
  };
};
