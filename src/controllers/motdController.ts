import FigletFonts from "../figletFonts";
import IFigletOptions from "../interfaces/IFigletOptions";

const figletFonts = new FigletFonts()

function generateCatOutput(data: string) {
  return Promise.resolve(`#!/bin/sh
cat << 'EOF'
${data}
EOF
  `)
}

const modtFontController = (req, res) => {
  const { text, font, width } = req.query;
  let options: IFigletOptions | Object = {};
  if (font) options = { ...options, font };
  if (width) options = { ...options, width };

  figletFonts.generateText(text, options as IFigletOptions)
    .then((data) => generateCatOutput(data))
    .then((motd) => res.send(motd))
    .catch((error) => {
      const msg = error?.message || "Unexpected error from generating motd figlet"
      res.status(error?.statusCode || 500).send(msg)
    });
};

export default modtFontController;