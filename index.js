const figlet = require("figlet");
const express = require("express");

const app = express();
const port = 3000;

const defaultFontOptions = {
  font: "Larry 3D",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
};

function generateLarryMessage(message) {
  return new Promise((resolve, reject) => {
    figlet.text(
      message,
      {
        ...defaultFontOptions,
      },
      (err, data) => {
        if (err) {
          console.error("error from figlet:", error);
          return reject(err);
        }

        resolve(data.replaceAll("L", "_"));
      }
    );
  });
}

function generateCatOutput(ascii) {
  return `#!/bin/bash
cat << 'EOF'

${ascii}

EOF
`;
}

const asciiFontController = (req, res) => {
  const { message } = req.query;
  console.log(`generating ascii for: ${message}`);

  return generateLarryMessage(message)
    .then((ascii) => res.send(ascii))
    .catch((error) =>
      res.status(500).send({
        success: false,
        message: "Unexpected error from font generation",
      })
    );
};

const modtFontController = (req, res) => {
  const { message } = req.query;
  console.log(`generating motd for: ${message}`);

  return generateLarryMessage(message)
    .then((ascii) => generateCatOutput(ascii))
    .then((motd) => res.send(motd))
    .catch((error) => {
      return res.status(500).send({
        success: false,
        message: "Unexpected error from font generation",
      });
    });
};

app.get("/ascii", asciiFontController);
app.get("/motd", modtFontController);

app.listen(port, () => {
  console.log(`Font generation application listening on port ${port}.`);
});
