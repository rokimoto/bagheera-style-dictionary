import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VolumeMuteFilled = ({
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
      d="M8 15a.968.968 0 0 1-.713-.288A.967.967 0 0 1 7 14v-4a.97.97 0 0 1 .287-.713A.97.97 0 0 1 8 9h3l3.3-3.3c.317-.317.679-.388 1.087-.213.409.175.613.488.613.938v11.15c0 .45-.204.762-.613.937-.408.175-.77.105-1.087-.212L11 15H8Z"
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

export default withTheme(VolumeMuteFilled);
