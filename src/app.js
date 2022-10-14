const express = require("express");

const asciiFontController = require("./controllers/asciiController.js");
const modtFontController = require("./controllers/motdController.js");
const requiredQueryMiddleware = require("./requiredQueryMiddleware");

const app = express();
const port = 3000;

app.get("/ascii", requiredQueryMiddleware, asciiFontController);
app.get("/motd", requiredQueryMiddleware, modtFontController);

app.listen(port, () => {
  console.log(`Font generation application listening on port ${port}.`);
});
