import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SkipPrevious = ({
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
      d="M6.5 18a.968.968 0 0 1-.713-.288A.967.967 0 0 1 5.5 17V7a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6.5 6a.97.97 0 0 1 .713.287A.97.97 0 0 1 7.5 7v10c0 .283-.096.52-.287.712A.968.968 0 0 1 6.5 18Zm10.45-1.025-6.2-4.15A.941.941 0 0 1 10.3 12c0-.35.15-.625.45-.825l6.2-4.15a.935.935 0 0 1 1.025-.038c.35.192.525.488.525.888v8.25c0 .4-.175.7-.525.9-.35.2-.692.183-1.025-.05Z"
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

export default withTheme(SkipPrevious);
