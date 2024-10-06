const {toRgbaString, toSrgb} = require('../helpers/colorFormatter');

const opacity = {
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.attributes.category === 'color' && !!token.value.opacity;
  },
  transformer: function (token) {
    return `${toRgbaString(token.value.color, token.value.opacity)}`;
  },
};

const srgb = {
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return token.attributes.category === 'color';
  },
  transformer: function (token) {
    if (token.value.color && token.value.opacity) {
      return toSrgb(token.value.color, token.value.opacity);
    }
    return toSrgb(token.value);
  },
};

module.exports = {
  opacity,
  srgb,
};
