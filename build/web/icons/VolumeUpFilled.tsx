import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VolumeUpFilled = ({
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
      d="M15.35 20.3a.888.888 0 0 1-.925-.125c-.283-.217-.425-.517-.425-.9 0-.183.054-.346.163-.487a.953.953 0 0 1 .412-.313 6.975 6.975 0 0 0 3.213-2.55c.808-1.167 1.212-2.483 1.212-3.95s-.404-2.783-1.212-3.95a6.976 6.976 0 0 0-3.213-2.55.838.838 0 0 1-.425-.325.882.882 0 0 1-.15-.5c0-.367.142-.658.425-.875a.888.888 0 0 1 .925-.125 8.904 8.904 0 0 1 4.1 3.275c1.033 1.5 1.55 3.183 1.55 5.05s-.517 3.55-1.55 5.05a8.904 8.904 0 0 1-4.1 3.275ZM4 15a.965.965 0 0 1-.712-.288A.965.965 0 0 1 3 14v-4c0-.283.096-.521.288-.713A.967.967 0 0 1 4 9h3l3.3-3.3c.317-.317.679-.388 1.087-.213.409.175.613.488.613.938v11.15c0 .45-.204.762-.613.937-.408.175-.77.105-1.087-.212L7 15H4Zm10 1V7.95a4.2 4.2 0 0 1 1.812 1.625c.459.733.688 1.542.688 2.425 0 .883-.23 1.683-.688 2.4A4.248 4.248 0 0 1 14 16Z"
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

export default withTheme(VolumeUpFilled);
