const figlet = require("figlet");

const defaultFontOptions = {
  font: "Larry 3D",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
};

function generateAscii(message, options) {
  const _options = {
    ...defaultFontOptions,
    ...options,
  };

  return new Promise((resolve, reject) => {
    figlet.text(message, _options, (err, data) => {
      if (err) {
        console.error("error from figlet:", error);
        return reject(err);
      }

      if (_options.font === "Larry 3D") {
        data = data.replaceAll("L", "_");
      }

      resolve(data);
    });
  });
}

module.exports = generateAscii;
