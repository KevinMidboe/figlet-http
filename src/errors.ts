class MissingTextError extends Error {
  error: string
  statusCode: number

  constructor(error = null) {
    const message = `Missing query parameter 'text'.`;
    super(message);

    this.error = error;
    this.statusCode = 400;
  }
}

class FontNotFoundError extends Error {
  error: string
  statusCode: number

  constructor(font, error = null) {
    const message = `Font '${font}' not found. Check /fonts.`;
    super(message);

    this.error = error;
    this.statusCode = 404;
  }
}

class UnexpectedFigletError extends Error {
  error: string
  statusCode: number

  constructor(error) {
    const message = "Unexpected error from figlet!"
    super(message)

    this.error = error;
    this.statusCode = 500

    console.log(message)
    console.log(error)
  }
}

export {
  MissingTextError,
  FontNotFoundError,
  UnexpectedFigletError
};
