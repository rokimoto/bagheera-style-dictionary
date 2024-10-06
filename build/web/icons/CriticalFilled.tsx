import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const CriticalFilled = ({
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
      d="M2.725 21a.907.907 0 0 1-.85-.5.978.978 0 0 1 0-1l9.25-16c.183-.333.475-.5.875-.5s.692.167.875.5l9.25 16a.978.978 0 0 1 0 1 .907.907 0 0 1-.85.5H2.725ZM12 10a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 11v3c0 .283.096.52.288.712A.965.965 0 0 0 12 15a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 14v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 10Zm0 8a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 17a.967.967 0 0 0-.287-.712A.968.968 0 0 0 12 16a.965.965 0 0 0-.712.288A.965.965 0 0 0 11 17c0 .283.096.52.288.712A.965.965 0 0 0 12 18Z"
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

export default withTheme(CriticalFilled);
