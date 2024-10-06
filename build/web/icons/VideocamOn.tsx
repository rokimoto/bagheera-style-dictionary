import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VideocamOn = ({
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
      d="M4 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4h12c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v4.5l3.15-3.15c.167-.167.35-.208.55-.125.2.083.3.242.3.475v8.6c0 .233-.1.392-.3.475-.2.083-.383.042-.55-.125L18 13.5V18c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 16 20H4Zm0-2h12V6H4v12Zm0 0V6v12Z"
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

export default withTheme(VideocamOn);