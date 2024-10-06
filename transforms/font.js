const lineHeight = {
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return (
      token.attributes.category === 'font' &&
      token.attributes.type === 'lineHeight'
    );
  },
  transformer: function (token) {
    if (token.value.unit === 'unitless') {
      return token.value.length;
    } else {
      return `${token.value.length}${token.value.unit}`;
    }
  },
};

const letterSpacing = {
  type: 'value',
  transitive: true,
  matcher: function (token) {
    return (
      token.attributes.category === 'font' &&
      token.attributes.type === 'letterSpacing'
    );
  },
  transformer: function (token) {
    if (token.value === 0) {
      return `${token.value}`;
    }
    return `${token.value / 100}em`;
  },
};

module.exports = {
  lineHeight,
  letterSpacing,
};
