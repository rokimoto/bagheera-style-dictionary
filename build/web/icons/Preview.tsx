import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Preview = ({
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
      d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm0-2h14V7H5v12Zm7-2c-1.367 0-2.587-.371-3.662-1.113A6.37 6.37 0 0 1 6 13a6.37 6.37 0 0 1 2.338-2.887C9.413 9.371 10.633 9 12 9s2.588.371 3.663 1.113A6.371 6.371 0 0 1 18 13a6.371 6.371 0 0 1-2.337 2.887C14.588 16.629 13.367 17 12 17Zm0-1.5c.933 0 1.783-.221 2.55-.663A4.707 4.707 0 0 0 16.35 13a4.714 4.714 0 0 0-1.8-1.838A5.02 5.02 0 0 0 12 10.5a5.02 5.02 0 0 0-2.55.662A4.715 4.715 0 0 0 7.65 13a4.707 4.707 0 0 0 1.8 1.837A5.014 5.014 0 0 0 12 15.5Zm0-1c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 10.5 13c0-.417.146-.77.438-1.062A1.444 1.444 0 0 1 12 11.5c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062 0 .417-.146.77-.438 1.062A1.444 1.444 0 0 1 12 14.5Z"
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

export default withTheme(Preview);
