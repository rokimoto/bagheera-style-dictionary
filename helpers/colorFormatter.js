const Color = require('tinycolor2');

const toRgb = hex => {
  const {r, g, b} = Color(hex).toRgb();
  return {r, g, b};
};

const toSrgb = (colorValue, alpha) => {
  // if already processed as rgba - check if needs a new alpha and return
  if (!!colorValue.blue) {
    colorValue.alpha = alpha ? alpha.toFixed(4) : colorValue.alpha;
    return colorValue;
  }
  const {r, g, b, a} = Color(colorValue).toRgb();
  return {
    alpha: alpha ? alpha.toFixed(4) : a.toFixed(4),
    blue: (b / 255).toFixed(4),
    green: (g / 255).toFixed(4),
    red: (r / 255).toFixed(4),
  };
};

const toRgbaString = (hex, opacity) => {
  const {r, g, b} = toRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

module.exports = {
  toRgb,
  toRgbaString,
  toSrgb,
};
