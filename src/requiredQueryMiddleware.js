const { MissingTextError } = require("./errors.js");

const requiredQueryMiddleware = (req, res, next) => {
  const { text } = req.query;

  if (!text || text?.length === 0) {
    const error = new MissingTextError();
    return res.status(error?.statusCode || 500).send(error?.message);
  }

  next();
};

module.exports = requiredQueryMiddleware;
