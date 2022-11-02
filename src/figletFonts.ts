import figlet from "figlet";
import IFigletOptions from "./interfaces/IFigletOptions";
import { UnexpectedFigletError } from './errors'

class FigletFonts {

  cachedFonts: Array<string>;
  defaultFontOptions: IFigletOptions

  constructor() {
    this.cachedFonts = [];
    this.defaultFontOptions = {
      font: "Larry 3D",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    };
  }

  static sanitizeLarry(text: string) {
    return text.replaceAll("L", "_");
  }

  generateText(text: string, options: IFigletOptions): Promise<string> {
    const _options: IFigletOptions = {
      ...this.defaultFontOptions,
      ...options,
    };

    return new Promise((resolve, reject) => {
      figlet.text(text, _options, (err, data) => {
        if (err) {
          return reject(new UnexpectedFigletError(err));
        }

        resolve(data);
      });
    });
  }

  get fonts(): Promise<Array<string>> {
    if (this.cachedFonts.length > 0) {
      return Promise.resolve(this.cachedFonts);
    }

    return new Promise((resolve, reject) => {
      figlet.fonts((err, fonts) => {
        if (err) {
          return reject(new UnexpectedFigletError(err));
        }

        resolve(fonts);
      });
    });
  }
}

export default FigletFonts;
