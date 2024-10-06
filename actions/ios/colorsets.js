const fs = require('fs-extra');
const {contents, darkAppearance, idiom} = require('./consts');

const basePath = 'Colors.xcassets/Overhaul_5-19-22';

/**
 * This action will iterate over all the colors in the Style Dictionary
 * and for each one write a colorset with light and (optional) dark
 * mode versions.
 */
module.exports = {
  // This is going to run once per theme.
  do: (dictionary, platform) => {
    const assetPath = `${platform.buildPath}/${basePath}`;
    fs.ensureDirSync(assetPath);
    fs.writeFileSync(
      `${assetPath}/Contents.json`,
      JSON.stringify(contents, null, 2)
    );

    dictionary.allProperties
      .filter(token => token.attributes.category === `color`)
      .forEach(token => {
        let path = assetPath;
        if (token.attributes.type === 'core') {
          path += '/Base';
        } else if (
          token.attributes.type === 'background' ||
          token.attributes.type === 'action'
        ) {
          path += '/Background';
        } else if (token.attributes.type === 'border') {
          path += '/Border';
        } else if (token.attributes.type === 'content') {
          path += '/Content';
        } else if (token.attributes.type === 'focus') {
          path += '/Focus';
        }

        fs.ensureDirSync(path);
        fs.writeFileSync(
          `${path}/Contents.json`,
          JSON.stringify(contents, null, 2)
        );

        const colorsetPath = `${path}/${token.name}.colorset`;
        fs.ensureDirSync(colorsetPath);

        // The colorset might already exist because Style Dictionary is run multiple
        // times with different configurations. If the colorset already exists we want
        // to modify it rather than writing over it.
        const colorset = fs.existsSync(`${colorsetPath}/Contents.json`)
          ? fs.readJsonSync(`${colorsetPath}/Contents.json`)
          : {...contents, colors: []};

        const color = {
          idiom,
          color: {
            'color-space': `srgb`,
            components: token.value,
          },
        };

        if (platform.mode === `dark`) {
          color.appearances = [darkAppearance];
        }

        colorset.colors.push(color);

        fs.writeFileSync(
          `${colorsetPath}/Contents.json`,
          JSON.stringify(colorset, null, 2)
        );
      });
  },
  undo: function (dictionary, platform) {
    // no undo
  },
};
