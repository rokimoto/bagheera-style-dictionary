// TEMPLATES
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const moment = require('moment');

handlebars.registerHelper('dateFormat', function (date) {
  const formatToUse =
    (arguments[1] && arguments[1].hash && arguments[1].hash.format) ||
    'MM/DD/YYYY';
  return moment(date).format(formatToUse);
});

handlebars.registerHelper('dateNow', () => {
  return new Date();
});

const getTemplate = file => {
  return path.join(__dirname, '..', 'templates', file);
};

const templateCustomSwiftColors = handlebars.compile(
  fs.readFileSync(getTemplate('swift-color-exports.hbs')).toString()
);

function swiftColorExports({dictionary, platform}) {
  return templateCustomSwiftColors({
    properties: dictionary.tokens,
    options: platform,
  });
}

module.exports = {
  swiftColorExports,
};
