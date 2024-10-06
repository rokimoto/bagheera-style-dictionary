import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Record = ({
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
      d="M12 19c-1.95 0-3.604-.68-4.962-2.038C5.679 15.604 5 13.95 5 12c0-1.95.68-3.604 2.038-4.963C8.396 5.679 10.05 5 12 5c1.95 0 3.604.679 4.962 2.037C18.321 8.396 19 10.05 19 12c0 1.95-.68 3.604-2.038 4.962C15.604 18.321 13.95 19 12 19Z"
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

export default withTheme(Record);
