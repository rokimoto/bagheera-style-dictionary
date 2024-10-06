import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ThumbUpFilled = ({
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
      d="M10 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 8 19V8.825c0-.267.054-.521.163-.763.108-.241.254-.454.437-.637l5.425-5.4c.25-.233.546-.375.888-.425.341-.05.67.008.987.175.317.167.546.4.687.7.142.3.171.608.088.925L15.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2a2.017 2.017 0 0 1-.15.75l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35h-8Zm-6 0c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 19v-9c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 8c.55 0 1.02.196 1.412.587C5.804 8.979 6 9.45 6 10v9c0 .55-.196 1.021-.588 1.413A1.925 1.925 0 0 1 4 21Z"
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

export default withTheme(ThumbUpFilled);
