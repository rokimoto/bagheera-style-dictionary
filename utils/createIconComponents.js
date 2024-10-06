const svgr = require('@svgr/core').transform;
const fs = require('fs');
const path = require('path');
const pascalCase = require('./pascalCase');
const defaultTemplate = require('../templates/react-icon-template');

const indentLine = (string, indentationLevel) => {
  if (!indentationLevel) {
    return string;
  }

  return `${' '.repeat(indentationLevel)}${string}`;
};

const createIconComponents = async () => {
  const icons = {};

  const sourceIconsDir = path.join(__dirname, '..', 'icons/');
  const buildIconsDir = path.join(__dirname, '..', 'build', 'web', 'icons/');

  const svgFiles = fs
    .readdirSync(sourceIconsDir)
    .filter(fileName => path.extname(fileName).toLowerCase() === '.svg');

  svgFiles.forEach(function (filename) {
    const fileContent = fs.readFileSync(sourceIconsDir + filename, 'utf-8');
    icons[filename.substr(0, filename.lastIndexOf('.'))] = fileContent;
  });

  try {
    fs.readdirSync(buildIconsDir);
  } catch {
    fs.mkdirSync(buildIconsDir);
  }

  for (let i = 0; i < Object.keys(icons).length; i++) {
    const iconName = Object.keys(icons)[i];
    const componentName = pascalCase(iconName);

    const reactComponent = await svgr(
      icons[iconName],
      {
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier',
        ],
        dimensions: false,
        jsxRuntime: 'automatic',
        template: defaultTemplate,
        svgProps: {width: '{size}', height: '{size}'},
        replaceAttrValues: {
          '#211F30':
            "{isHex(contentColor) ? contentColor : contentColor === 'brand-gradient' ? 'url(#linear-gradient)' : theme.contentColor[contentColor]}",
          '#252526':
            "{isHex(contentColor) ? contentColor : contentColor === 'brand-gradient' ? 'url(#linear-gradient)' : theme.contentColor[contentColor]}",
          '#000':
            "{isHex(contentColor) ? contentColor : contentColor === 'brand-gradient' ? 'url(#linear-gradient)' : theme.contentColor[contentColor]}",
          '#000000':
            "{isHex(contentColor) ? contentColor : contentColor === 'brand-gradient' ? 'url(#linear-gradient)' : theme.contentColor[contentColor]}",
          'url(#linear-gradient)':
            "{isHex(contentColor) ? contentColor : contentColor === 'brand-gradient' ? 'url(#linear-gradient)' : theme.contentColor[contentColor]}",
        },
        typescript: true,
      },
      {componentName}
    );

    fs.writeFileSync(buildIconsDir + `${componentName}.tsx`, reactComponent);
  }

  let iconComponentsIndexFile = '';
  let iconImports = "import React, { SVGProps } from 'react';\nimport { BrightComponent, Hex } from '@/types';\nimport { ContentColor } from '@/styles/bagheera-def/theme-mode.d';\n\n";
  let iconComponentsImports = '';
  let iconProps =
`interface CustomProps {
  size?: string | number;
  contentColor?: keyof ContentColor | Hex | 'brand-gradient';
}

export type IconProps = BrightComponent<CustomProps, SVGProps<SVGSVGElement>>;\n\n`;
  let iconTypes = 'export interface IconTypes {\n';
  let iconNames = 'export type IconNames =';
  let iconComponentsExport = `const icons: IconTypes = {\n`;

  for (let i = 0; i < Object.keys(icons).length; i++) {
    const iconName = Object.keys(icons)[i];

    const componentName = pascalCase(iconName);
    iconComponentsImports = iconComponentsImports.concat(
      `import ${componentName} from './${componentName}';\n`
    );
    iconComponentsExport = iconComponentsExport.concat(
      indentLine(`${componentName}: ${componentName},\n`, 2)
    );

    iconTypes = iconTypes.concat(
      `${indentLine(`${componentName}: React.FC;\n`, 2)}`
    );

    iconNames = iconNames.concat(
      `\n${`${indentLine(`| '${componentName}'`, 2)}`}`
    );
  }

  iconComponentsExport = iconComponentsExport.concat(
    '};\n\nexport default icons;\n'
  );
  iconTypes = iconTypes.concat('}');
  iconNames = iconNames.concat(';\n');
  iconComponentsIndexFile = iconComponentsIndexFile.concat(
    iconImports
  );
  iconComponentsIndexFile = iconComponentsIndexFile.concat(
    iconProps
  );
  iconComponentsIndexFile = iconComponentsIndexFile.concat(
    iconComponentsImports
  );
  iconComponentsIndexFile = iconComponentsIndexFile.concat(iconNames);
  iconComponentsIndexFile = iconComponentsIndexFile.concat(iconTypes);
  iconComponentsIndexFile = iconComponentsIndexFile.concat('\n');
  iconComponentsIndexFile =
    iconComponentsIndexFile.concat(iconComponentsExport);
  fs.writeFileSync(buildIconsDir + 'index.ts', iconComponentsIndexFile);
};

module.exports = createIconComponents;
