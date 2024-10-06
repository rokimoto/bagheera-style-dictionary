// TEMPLATES
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const { indexOf } = require('lodash');

handlebars.registerHelper('styledProps', entity => {
  return `\${theme.${entity}}`;
});

handlebars.registerHelper('getTypographyName', function(text) {
  var result = '${get' + text + '}';
  return new handlebars.SafeString(result);
});

handlebars.registerHelper('getTypographyNameDesktop', function(text) {
  var result = '${get' + text + 'Desktop}';
  return new handlebars.SafeString(result);
});

handlebars.registerHelper('eq', (a, b) => a == b);

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

handlebars.registerHelper('capitalizeFirst', (str = '') => {
  return capitalize(str);
});

const pluralize = str => {
  return `${str}s`;
};

handlebars.registerHelper('pluralize', (str = '') => {
  return pluralize(str);
});

const alphanumericSpaceString = str => {
  if (!isNaN(parseInt(str.charAt(0), 10)) || str.indexOf(' ') >= 0) {
    return `'${str}'`;
  }
  return str;
};

handlebars.registerHelper('alphanumericSpaceString', (str = '') => {
  return alphanumericSpaceString(str);
});

handlebars.registerHelper(
  'getInterfaceName',
  (propertyKey = '', categoryKey = '') => {
    return `${capitalize(propertyKey)}${capitalize(categoryKey)}`;
  }
);

const partialsDir = __dirname + '/../templates/partials';

const partialFilenames = fs.readdirSync(partialsDir);

partialFilenames.forEach(function (filename) {
  const matches = /^([^.]+).hbs$/.exec(filename);
  if (!matches) {
    return;
  }
  const name = matches[1];
  const template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
  handlebars.registerPartial(name, template);
});

const getTemplate = file => {
  return path.join(__dirname, '..', 'templates', file);
};

const templateCustomJs = handlebars.compile(
  fs.readFileSync(getTemplate('js-exports.hbs')).toString()
);

const templateCustomJsDeclarations = handlebars.compile(
  fs.readFileSync(getTemplate('js-exports.d.hbs')).toString()
);

const templateCustomJsItem = handlebars.compile(
  fs.readFileSync(getTemplate('js-exports-item.hbs')).toString()
);

const templateCustomJsTagDeclarations = handlebars.compile(
  fs.readFileSync(getTemplate('js-exports-tag.d.hbs')).toString()
);

const templateCustomJsColorCoreDeclarations = handlebars.compile(
  fs.readFileSync(getTemplate('js-exports-color-core.d.hbs')).toString()
);

const templateTypography = handlebars.compile(
  fs.readFileSync(getTemplate('typography-exports.hbs')).toString()
);

const jsExports = ({dictionary, options}) => {
  return templateCustomJs({
    properties: dictionary.tokens,
    options: options,
  });
};

const jsExportsDef = ({dictionary, options}) => {
  return templateCustomJsDeclarations({
    properties: dictionary.tokens,
    options: options,
  });
};

const jsExportsItem = ({dictionary, options}) => {
  return templateCustomJsItem({
    properties: dictionary.tokens,
    options: options,
  });
};

const jsExportsTagDef = ({dictionary}) => {
  return templateCustomJsTagDeclarations({
    properties: dictionary.tokens,
  });
};

const jsExportsColorCoreDef = ({dictionary}) => {
  return templateCustomJsColorCoreDeclarations({
    properties: dictionary.tokens,
  });
};

const jsExportsTypography = ({dictionary}) => {
  return templateTypography({
    properties: dictionary.tokens,
  });
};

module.exports = {
  jsExports,
  jsExportsDef,
  jsExportsItem,
  jsExportsTagDef,
  jsExportsColorCoreDef,
  jsExportsTypography,
};
