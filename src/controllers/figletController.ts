import FigletFonts from '../figletFonts';
import IFigletOptions from '../interfaces/IFigletOptions';

const figletFonts = new FigletFonts();

const figletTextController = async (req, res) => {
  const { text, font, width } = req.query;
  let options: IFigletOptions;
  if (font) options = { ...options, font };
  if (width) options = { ...options, width };

  figletFonts.generateText(text, options)
    .then((data) => res.send(data))
    .catch((error) => {
      const msg = error?.message || 'Unexpected error from generating figlet';
      res.status(error?.statusCode || 500).send(msg);
    });
};

export default figletTextController;
