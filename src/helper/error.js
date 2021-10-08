const env = process.env.NODE_ENV || 'development';

export default function (statusCode, message, error) {
  Error.call(this);
  this.code = statusCode;
  this.message = message;
  console.log(this.message);
  this.logging = function () {
    if (env === 'development') console.log(error);
  };
  this.logging();
}
