export default function (res, req) {
  return function ({ data, message, error }) {
    console.log(error);
    const response = !error
      ? { data, message: req.translate(message), statusCode: 200 }
      : { data, message: req.translate(error.message), statusCode: error.code };
    return res.status(response.statusCode).json(response);
  };
}
