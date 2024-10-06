import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ArrowDownward = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {
  theme: DefaultTheme;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path
      d="M12 19.575a1.1 1.1 0 0 1-.375-.063.871.871 0 0 1-.325-.212l-6.6-6.6c-.2-.2-.3-.438-.3-.713 0-.275.1-.512.3-.712.2-.2.433-.3.7-.3.267 0 .5.1.7.3l4.9 4.9v-11.2c0-.283.096-.517.288-.7A.99.99 0 0 1 12 4a.97.97 0 0 1 .713.287A.97.97 0 0 1 13 5v11.175l4.9-4.9c.2-.2.433-.3.7-.3.267 0 .5.1.7.3.2.2.3.437.3.712 0 .275-.1.513-.3.713l-6.6 6.6c-.1.1-.208.17-.325.212a1.1 1.1 0 0 1-.375.063Z"
      fill={
        isHex(contentColor)
          ? contentColor
          : contentColor === 'brand-gradient'
          ? 'url(#linear-gradient)'
          : theme.contentColor[contentColor]
      }
    />
  </svg>
);

export default withTheme(ArrowDownward);
