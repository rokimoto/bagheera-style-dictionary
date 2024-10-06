const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const themeKey = {
  type: 'attribute',
  transformer: function (token) {
    const originalAttrs = token.attributes || {};
    let themeKey = token.attributes.type;
    let themeDefKey = capitalize(token.attributes.type);
    if (token.attributes.category === 'border') {
      themeKey = `${token.attributes.category}${capitalize(
        token.attributes.type
      )}`;
      themeDefKey = `${capitalize(token.attributes.category)}${capitalize(
        token.attributes.type
      )}`;
    }
    if (
      token.attributes.category === 'font' &&
      (token.attributes.type === 'weight' || token.attributes.type === 'size')
    ) {
      themeKey = `${token.attributes.category}${capitalize(
        token.attributes.type
      )}`;
      themeDefKey = `${capitalize(token.attributes.category)}${capitalize(
        token.attributes.type
      )}`;
    }
    if (
      token.attributes.category === 'elevation' ||
      token.attributes.category === 'opacity' ||
      token.attributes.category === 'spacing'
    ) {
      themeKey = token.attributes.category;
      themeDefKey = capitalize(token.attributes.category);
    }
    if (
      token.attributes.category === 'color' &&
      token.attributes.type === 'core'
    ) {
      themeKey = token.attributes.category;
      themeDefKey = capitalize(token.attributes.category);
    }
    if (
      token.attributes.category === 'color' &&
      (token.attributes.type === 'action' ||
        token.attributes.type === 'background' ||
        token.attributes.type === 'border' ||
        token.attributes.type === 'content' ||
        token.attributes.type === 'focus')
    ) {
      themeKey = `${token.attributes.type}${capitalize(
        token.attributes.category
      )}`;
      themeDefKey = `${capitalize(token.attributes.type)}${capitalize(
        token.attributes.category
      )}`;
    }
    if (
      token.attributes.category === 'component' &&
      token.attributes.type === 'tag'
    ) {
      themeKey = token.attributes.type;
      themeDefKey = capitalize(token.attributes.type) + 's';
    }
    return Object.assign({themeKey, themeDefKey}, originalAttrs);
  },
};

module.exports = {
  themeKey,
};
