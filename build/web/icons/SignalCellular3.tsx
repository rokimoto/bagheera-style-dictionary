import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SignalCellular3 = ({
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
      d="M18.5 20c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 17 18.5v-13c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 18.5 4c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062v13c0 .417-.146.77-.438 1.062A1.444 1.444 0 0 1 18.5 20Zm-12 0a1.5 1.5 0 0 1-1.387-.925A1.498 1.498 0 0 1 5 18.5v-3c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 6.5 14c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062v3a1.468 1.468 0 0 1-.438 1.062A1.5 1.5 0 0 1 6.5 20Zm6 0c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 11 18.5v-8c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 12.5 9c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062v8c0 .417-.146.77-.438 1.062A1.444 1.444 0 0 1 12.5 20Z"
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

export default withTheme(SignalCellular3);
