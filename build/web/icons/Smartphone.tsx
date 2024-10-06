import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Smartphone = ({
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
      d="M7 23c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 21V3c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 7 1h10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v18c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 17 23H7Zm0-5v3h10v-3H7Zm5 2.5a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 19.5a.967.967 0 0 0-.287-.712A.968.968 0 0 0 12 18.5a.965.965 0 0 0-.712.288.965.965 0 0 0-.288.712c0 .283.096.52.288.712A.965.965 0 0 0 12 20.5ZM7 16h10V6H7v10ZM7 4h10V3H7v1Zm0 14v3-3ZM7 4V3v1Z"
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

export default withTheme(Smartphone);
