import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Discord = ({
  size = 24,
  contentColor = 'default',
  theme,
  ...props
}: IconProps & {
  theme: DefaultTheme;
}) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <path
      d="M324.954 86.85A297.735 297.735 0 0 0 250.684 64a203.89 203.89 0 0 0-9.514 19.34 276.584 276.584 0 0 0-82.426 0A204.793 204.793 0 0 0 149.23 64a299.831 299.831 0 0 0-74.327 22.907C27.9 156.449 15.158 224.264 21.529 291.116a299.36 299.36 0 0 0 91.09 45.729 220.048 220.048 0 0 0 19.509-31.458 193.725 193.725 0 0 1-30.722-14.667c2.577-1.869 5.097-3.795 7.532-5.664a213.966 213.966 0 0 0 182.123 0c2.463 2.011 4.983 3.936 7.532 5.664a194.535 194.535 0 0 1-30.779 14.695 218.115 218.115 0 0 0 19.509 31.43 298.016 298.016 0 0 0 91.147-45.701c7.475-77.527-12.77-144.719-53.516-204.294ZM140.198 250.002c-17.754 0-32.421-16.111-32.421-35.932 0-19.82 14.157-36.073 32.364-36.073 18.207 0 32.761 16.253 32.449 36.073-.311 19.821-14.299 35.932-32.392 35.932Zm119.603 0c-17.782 0-32.393-16.111-32.393-35.932 0-19.82 14.158-36.073 32.393-36.073s32.676 16.253 32.364 36.073c-.311 19.821-14.271 35.932-32.364 35.932Z"
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

export default withTheme(Discord);
