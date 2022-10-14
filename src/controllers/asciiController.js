const generateAscii = require("../ascii.js");

const asciiFontController = (req, res) => {
  const { text } = req.query;

  return generateAscii(text)
    .then((ascii) => res.send(ascii))
    .catch((error) =>
      res.status(error?.statusCode || 500).send({
        success: false,
        message: error?.message || "Unexpected error from font generation",
      })
    );
};

module.exports = asciiFontController;
