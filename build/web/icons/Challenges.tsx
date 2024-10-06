import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Challenges = ({
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
      d="m19.05 21.6-2.925-2.9-2.2 2.2-.7-.7c-.383-.383-.575-.858-.575-1.425 0-.567.192-1.042.575-1.425l4.225-4.225c.383-.383.858-.575 1.425-.575.567 0 1.042.192 1.425.575l.7.7-2.2 2.2 2.9 2.925c.2.2.3.433.3.7 0 .267-.1.5-.3.7l-1.25 1.25c-.2.2-.433.3-.7.3a.96.96 0 0 1-.7-.3ZM22 5.9 10.65 17.25l.125.1c.383.383.575.858.575 1.425 0 .567-.192 1.042-.575 1.425l-.7.7-2.2-2.2-2.925 2.9c-.2.2-.433.3-.7.3a.96.96 0 0 1-.7-.3L2.3 20.35a.96.96 0 0 1-.3-.7c0-.267.1-.5.3-.7l2.9-2.925-2.2-2.2.7-.7c.383-.383.858-.575 1.425-.575.567 0 1.042.192 1.425.575l.1.125L18 1.9h4v4ZM6.95 10.85 2 5.9v-4h4l4.95 4.95-1.425 1.4-4.35-4.35H4v1.175l4.35 4.35-1.4 1.425Zm2.3 4.975L20 5.075V3.9h-1.175L8.075 14.65l1.175 1.175Z"
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

export default withTheme(Challenges);
