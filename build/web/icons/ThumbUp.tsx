import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ThumbUp = ({
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
      d="M7 21V8l6-5.95c.25-.25.546-.396.887-.438.342-.041.671.021.988.188.317.167.55.4.7.7.15.3.183.608.1.925L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35H7ZM9 8.85V19h9l3-7v-2h-9l1.35-5.5L9 8.85ZM4 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 19v-9c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 8h3v2H4v9h3v2H4Zm5-2V8.85 19Z"
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

export default withTheme(ThumbUp);
