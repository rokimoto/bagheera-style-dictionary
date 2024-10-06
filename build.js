const StyleDictionary = require('style-dictionary');
const createIconComponents = require('./utils/createIconComponents');
const {
  jsExports,
  jsExportsDef,
  jsExportsItem,
  jsExportsTagDef,
  jsExportsColorCoreDef,
  jsExportsTypography,
} = require('./formats/jsTemplates');
// const {swiftColorExports} = require('./formats/swiftTemplates');
const elevationTransforms = require('./transforms/elevation');
const colorTransforms = require('./transforms/color');
const fontTransforms = require('./transforms/font');
const unitTransforms = require('./transforms/unit');
const nameTransforms = require('./transforms/name');
const opacityTransforms = require('./transforms/opacity');
const attributeTransforms = require('./transforms/attribute');
// const generateColorsets = require('./actions/ios/colorsets');

const modes = ['light', 'dark'];

// const iosPath = 'build/ios/';
const webPath = 'build/web/';

console.log('Build started...');
console.log('\n==============================================');

// const iosColors = {
//   buildPath: iosPath,
//   transforms: ['attribute/cti', 'name/ti/camel', 'name/i/camel', 'color/srgb'],
//   actions: ['ios/generateColorsets'],
// };

// Register transforms / formats
const styleDictionary = StyleDictionary.extend({
  // action: {
  //   'ios/generateColorsets': generateColorsets,
  // },
  transform: {
    'attribute/theme-key': attributeTransforms.themeKey,
    'elevation/box-shadow': elevationTransforms.boxShadow,
    'color/opacity': colorTransforms.opacity,
    'font/lineHeight': fontTransforms.lineHeight,
    'font/letterSpacing': fontTransforms.letterSpacing,
    'color/srgb': colorTransforms.srgb,
    'unit/px': unitTransforms.px,
    'name/typography': nameTransforms.typographyName,
    'name/i/camel': nameTransforms.iCamel,
    'opacity/decimal': opacityTransforms.decimal,
  },
  format: {
    'template/js-exports': jsExports,
    'template/js-exports.d': jsExportsDef,
    'template/js-exports-item': jsExportsItem,
    'template/js-exports-tag.d': jsExportsTagDef,
    'template/js-exports-color-core.d': jsExportsColorCoreDef,
    'template/js-exports-typography': jsExportsTypography,
  },
});

styleDictionary.registerTransformGroup({
  name: 'tokens',
  transforms: [
    'attribute/cti',
    'attribute/theme-key',
    'name/typography',
    'elevation/box-shadow',
    'unit/px',
    'opacity/decimal',
    'font/lineHeight',
    'font/letterSpacing',
    'color/opacity',
  ],
});

console.log('\n\n🐈‍⬛ Building core mode tokens...');
styleDictionary
  .extend({
    source: [`tokens/**/!(*.${modes.join(`|*.`)}).json`],
    platforms: {
      web: {
        transformGroup: 'tokens',
        buildPath: webPath,
        files: [
          {
            destination: 'bagheera/theme-core.ts',
            format: 'template/js-exports',
            filter: token =>
              token.attributes.category !== 'color' &&
              token.attributes.category !== 'typography' &&
              token.attributes.type !== 'tag',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'bagheera-def/theme-core.d.ts',
            format: 'template/js-exports.d',
            filter: token =>
              token.attributes.category !== 'typography' &&
              token.attributes.category !== 'color' &&
              token.attributes.type !== 'tag',
            options: {
              outputReferences: true,
              interfaceName: 'ThemeCore',
            },
          },
          {
            destination: 'bagheera/theme-core-color.ts',
            format: 'template/js-exports-item',
            filter: token =>
              token.attributes.category === 'color' &&
              token.attributes.type === 'core',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'bagheera-def/theme-core-color.d.ts',
            format: 'template/js-exports-color-core.d',
            filter: token =>
              token.attributes.category === 'color' &&
              token.attributes.type === 'core',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'typography.ts',
            format: 'template/js-exports-typography',
            filter: token => token.attributes.category === 'typography',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
    },
  })
  .buildAllPlatforms();

// Light Mode
// we will only build the files we need to, we don't need to rebuild all the files
console.log(`\n\n☀️ Building light mode tokens...`);
styleDictionary
  .extend({
    // Using the include array so that theme token overrides don't show
    // warnings in the console.
    include: [`tokens/**/!(*.${modes.join(`|*.`)}).json`],
    source: [`tokens/**/*.light.json`],
    platforms: {
      web: {
        transformGroup: 'tokens',
        buildPath: webPath,
        files: [
          {
            destination: 'bagheera/theme-light.ts',
            format: 'template/js-exports',
            filter: token =>
              token.filePath.indexOf(`.light`) > -1 &&
              token.attributes.type !== 'tag',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'bagheera-def/theme-mode.d.ts',
            format: 'template/js-exports.d',
            filter: token =>
              token.filePath.indexOf(`.light`) > -1 &&
              token.attributes.type !== 'tag',
            options: {
              outputReferences: true,
              interfaceName: 'ThemeMode',
            },
          },
          {
            destination: 'bagheera/theme-light-tag.ts',
            format: 'template/js-exports-item',
            filter: token => token.attributes.type === 'tag',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'bagheera-def/theme-mode-tag.d.ts',
            format: 'template/js-exports-tag.d',
            filter: token => token.attributes.type === 'tag',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      // iosColors: Object.assign(iosColors, {
      //   mode: `light`,
      // }),
      // iOS: {
      //   buildPath: iosPath,
      //   transforms: ['attribute/cti', 'name/ti/camel', 'name/i/camel'],
      //   files: [
      //     {
      //       destination: 'Colors.swift',
      //       format: 'template/swift-color-exports',
      //       filter: token => token.attributes.category === `color`,
      //       options: {
      //         outputReferences: true,
      //       },
      //     },
      //   ],
      // },
    },
  })
  .buildAllPlatforms();

// Dark Mode
// we will only build the files we need to, we don't need to rebuild all the files
console.log(`\n\n🌙 Building dark mode...`);
styleDictionary
  .extend({
    // Using the include array so that theme token overrides don't show
    // warnings in the console.
    include: [`tokens/**/!(*.${modes.join(`|*.`)}).json`],
    source: [`tokens/**/*.dark.json`],
    platforms: {
      web: {
        transformGroup: 'tokens',
        buildPath: webPath,
        files: [
          {
            destination: 'bagheera/theme-dark.ts',
            format: 'template/js-exports',
            filter: token => token.filePath.indexOf(`.dark`) > -1 &&
            token.attributes.type !== 'tag',
            options: {
              outputReferences: true,
            },
          },
          {
            destination: 'bagheera/theme-dark-tag.ts',
            format: 'template/js-exports-item',
            filter: token => token.attributes.type === 'tag',
            options: {
              outputReferences: true,
            },
          },
        ],
      },
      // iosColors: Object.assign(iosColors, {
      //   mode: `dark`,
      // }),
    },
  })
  .buildAllPlatforms();

console.log(`\n\n🌙 Building icons...`);
createIconComponents();

console.log('\n==============================================');
console.log('\nBuild completed!');
