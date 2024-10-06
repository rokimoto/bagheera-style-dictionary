import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ScreenShare = ({
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
      d="M12 16a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 15v-3.15l.9.875c.2.183.433.279.7.287.267.009.5-.087.7-.287.2-.2.296-.438.288-.713a1.071 1.071 0 0 0-.288-.712l-2.6-2.6c-.1-.1-.208-.175-.325-.225A.942.942 0 0 0 12 8.4a1.783 1.783 0 0 0-.375.087.883.883 0 0 0-.325.213l-2.6 2.6a.932.932 0 0 0-.275.687c0 .275.1.513.3.713.2.183.433.28.7.288.267.008.5-.088.7-.288l.875-.875V15c0 .283.096.52.288.712A.965.965 0 0 0 12 16Zm-8 4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 20H4Zm0-2V6v12Zm0 0h16V6H4v12Z"
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

export default withTheme(ScreenShare);
