class MissingTextError extends Error {
  constructor(error = null) {
    const message = `Missing query parameter 'text'`;
    super(message);

    this.error = error;
    this.statusCode = 400;
  }
}

module.exports = {
  MissingTextError,
};
