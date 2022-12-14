import FigletFonts from '../figletFonts';

const figletFonts = new FigletFonts();

const fontsController = (req, res) => figletFonts.fonts
  .then((fonts) => res.send(fonts))
  .catch((error) => {
    const msg = error?.message || 'Unexpected error from fetching fonts';
    res.status(error?.statusCode || 500).send(msg);
  });

export default fontsController;
