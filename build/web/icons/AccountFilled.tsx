import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const AccountFilled = ({
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
      d="M5.85 17.1c.85-.65 1.8-1.163 2.85-1.538A9.744 9.744 0 0 1 12 15c1.15 0 2.25.187 3.3.562 1.05.375 2 .888 2.85 1.538a7.737 7.737 0 0 0 1.363-2.325A7.845 7.845 0 0 0 20 12c0-2.217-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12c0 .983.163 1.908.488 2.775A7.72 7.72 0 0 0 5.85 17.1ZM12 13c-.983 0-1.813-.337-2.488-1.012S8.5 10.483 8.5 9.5c0-.983.337-1.813 1.012-2.488S11.017 6 12 6c.983 0 1.813.337 2.488 1.012S15.5 8.517 15.5 9.5c0 .983-.337 1.813-1.012 2.488S12.983 13 12 13Zm0 9a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z"
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

export default withTheme(AccountFilled);
