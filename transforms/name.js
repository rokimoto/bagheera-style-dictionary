const camelCase = require('lodash').camelCase;

const typographyName = {
  type: 'name',
  matcher: token => {
    return token.attributes.category === 'typography';
  },
  transformer: function (token) {
    const name = token.path[1].charAt(0).toUpperCase() + token.path[1].slice(1);
    const size = token.path[2] ?? '';
    return `${name}${size}`;
  },
};

const iCamel = {
  type: 'name',
  matcher: token => {
    return token.attributes.type === 'core';
  },
  transformer: function (token, options) {
    return camelCase(
      [options.prefix].concat(token.path.slice(2, token.path.length)).join(' ')
    );
  },
};

module.exports = {
  typographyName,
  iCamel,
};
