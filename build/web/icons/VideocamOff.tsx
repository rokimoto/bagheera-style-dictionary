import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VideocamOff = ({
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
      d="M21.15 16.65 18 13.5v1.675l-2-2V6H8.825l-2-2H16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v4.5l3.15-3.15c.167-.167.35-.208.55-.125.2.083.3.242.3.475v8.6c0 .233-.1.392-.3.475-.2.083-.383.042-.55-.125Zm-1.3 6L1.325 4.125a.918.918 0 0 1-.275-.675c0-.267.1-.5.3-.7a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l18.525 18.525a.917.917 0 0 1 .275.675c0 .267-.1.5-.3.7a.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275ZM4 4l2 2H4v12h12v-2l2 2c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 16 20H4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4Z"
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

export default withTheme(VideocamOff);
