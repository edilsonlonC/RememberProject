export default function (statusCode, message, error, { log }) {
  Error.call(this);
  this.log = log || false;
  this.code = statusCode;
  this.message = message;
  this.logging = function () {
    console.log(error);
  };
  if (log) this.logging();
}
