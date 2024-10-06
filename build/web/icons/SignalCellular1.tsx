import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SignalCellular1 = ({
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
      d="M6.5 20c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 5 18.5v-3c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 6.5 14c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062v3c0 .417-.146.77-.438 1.062A1.444 1.444 0 0 1 6.5 20Z"
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

export default withTheme(SignalCellular1);
