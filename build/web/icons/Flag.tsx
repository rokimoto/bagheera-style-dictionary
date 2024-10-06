import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Flag = ({
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
      d="M6 21a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5 20V5a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 4h7.175a.96.96 0 0 1 .625.225c.183.15.3.342.35.575L14.4 6H19c.283 0 .52.096.712.287.192.192.288.43.288.713v8c0 .283-.096.52-.288.712A.965.965 0 0 1 19 16h-5.175a.96.96 0 0 1-.625-.225.99.99 0 0 1-.35-.575L12.6 14H7v6c0 .283-.096.52-.287.712A.968.968 0 0 1 6 21Zm8.65-7H18V8h-5.25l-.4-2H7v6h7.25l.4 2Z"
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

export default withTheme(Flag);
