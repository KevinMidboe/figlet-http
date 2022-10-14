const generateAscii = require("../ascii.js");

const modtFontController = (req, res) => {
  const { text } = req.query;

  return generateAscii(message)
    .then((ascii) => generateCatOutput(ascii))
    .then((motd) => res.send(motd))
    .catch((error) => {
      return res.status(500).send({
        success: false,
        message: "Unexpected error from font generation",
      });
    });
};

module.exports = modtFontController;
