import FigletFonts from './figletFonts';
import { MissingTextError, FontNotFoundError } from './errors';

const figletFonts = new FigletFonts();

async function doesFontExist(font: string) {
  const fontLowercased = font.toLowerCase();

  const fonts: Array<string> = await figletFonts.fonts;
  return fonts.findIndex((_font) => _font.toLowerCase() === fontLowercased) === -1;
}

const requiredQueryMiddleware = async (req, res, next) => {
  const { text, font = '' } = req.query;
  let error = null;

  if (!text || text?.length === 0) {
    error = new MissingTextError();
  }

  if (font && (await doesFontExist(font))) {
    error = new FontNotFoundError(font, error);
  }

  if (error) return res.status(error?.statusCode || 500).send(error?.message);

  return next();
};

export default requiredQueryMiddleware;
