const px = {
  type: 'value',
  matcher: function (token) {
    // add `px` for font lineHeight, font letterSpacing, font size, spacing, border
    return (
      (token.attributes.category === 'font' &&
        token.attributes.type === 'size') ||
      token.attributes.category === 'spacing' ||
      token.attributes.category === 'border'
    );
  },
  transformer: function (token) {
    if (token.value === 0) return `${token.value}`;
    return `${token.value}px`;
  },
};

module.exports = {
  px,
};
