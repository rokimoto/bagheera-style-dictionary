import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const FastRewind = ({
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
      d="m19.975 16.975-6.2-4.15a.941.941 0 0 1-.45-.825c0-.35.15-.625.45-.825l6.2-4.15A.935.935 0 0 1 21 6.987c.35.192.525.488.525.888v8.25c0 .4-.175.7-.525.9-.35.2-.692.183-1.025-.05Zm-10 0-6.2-4.15a.941.941 0 0 1-.45-.825c0-.35.15-.625.45-.825l6.2-4.15A.935.935 0 0 1 11 6.987c.35.192.525.488.525.888v8.25c0 .4-.175.7-.525.9-.35.2-.692.183-1.025-.05Z"
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

export default withTheme(FastRewind);
