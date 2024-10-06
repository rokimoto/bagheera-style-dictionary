const defaultTemplate = (variables, {tpl}) => {
  return tpl`
import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ${variables.componentName} = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {theme: DefaultTheme}) => (
  ${variables.jsx}
);

export default withTheme(${variables.componentName});
`;
};

module.exports = defaultTemplate;
