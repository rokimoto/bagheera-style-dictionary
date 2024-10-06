import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const CallEnd = ({
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
      d="M12 8c1.967 0 3.904.396 5.812 1.188 1.909.791 3.605 1.979 5.088 3.562.2.2.3.433.3.7 0 .267-.1.5-.3.7l-2.3 2.25a.974.974 0 0 1-1.3.1l-2.9-2.2a.993.993 0 0 1-.3-.35.993.993 0 0 1-.1-.45v-2.85a15.13 15.13 0 0 0-1.95-.475A11.867 11.867 0 0 0 12 10c-.7 0-1.383.058-2.05.175-.667.117-1.317.275-1.95.475v2.85a.992.992 0 0 1-.1.45.993.993 0 0 1-.3.35l-2.9 2.2a.975.975 0 0 1-1.3-.1l-2.3-2.25a.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7 1.467-1.583 3.158-2.77 5.075-3.562C8.092 8.396 10.033 8 12 8Z"
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

export default withTheme(CallEnd);
