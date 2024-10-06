const decimal = {
  type: 'value',
  matcher: function (token) {
    // add `px` for font lineHeight, font letterSpacing, font size, spacing, border
    return token.attributes.category === 'opacity';
  },
  transformer: function (token) {
    const decimal = token.value / 100;
    return `${Math.round(decimal * 100) / 100}`;
  },
};

module.exports = {
  decimal,
};
