import express from 'express';

import figletontController from './controllers/figletController';
import modtFontController from './controllers/motdController';
import fontsController from './controllers/fontsController';
import requiredQueryMiddleware from './requiredQueryMiddleware';

const app = express();
const port = 3000;

app.get('/figlet', requiredQueryMiddleware, figletontController);
app.get('/motd', requiredQueryMiddleware, modtFontController);
app.get('/fonts', fontsController);

app.listen(port, () => {
  console.log(`Figlet generation application listening on port ${port}.`); // eslint-disable-line no-console
});
