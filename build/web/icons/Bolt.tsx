import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Bolt = ({
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
      d="M10.675 21a.57.57 0 0 1-.45-.2.54.54 0 0 1-.125-.475L11 14H7.5c-.25 0-.404-.067-.463-.2-.058-.133-.02-.317.113-.55l5.7-9.975c.033-.083.1-.15.2-.2.1-.05.192-.075.275-.075a.57.57 0 0 1 .45.2.54.54 0 0 1 .125.475L13 10h3.5c.25 0 .404.067.462.2.059.133.021.317-.112.55l-5.7 9.975a.389.389 0 0 1-.2.2.622.622 0 0 1-.275.075Z"
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

export default withTheme(Bolt);
