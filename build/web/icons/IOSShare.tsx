import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const IOSShare = ({
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
      d="M12 15a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 14V3.825l-.9.9A.932.932 0 0 1 9.413 5a.974.974 0 0 1-.713-.3 1.02 1.02 0 0 1-.275-.713c0-.275.092-.504.275-.687L11.3.7a1.03 1.03 0 0 1 1.088-.2c.125.05.229.117.312.2l2.6 2.6c.2.2.3.442.3.725s-.1.517-.3.7c-.2.183-.437.275-.712.275a.933.933 0 0 1-.688-.275l-.9-.9V14c0 .283-.096.52-.287.712A.968.968 0 0 1 12 15Zm-6 7c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 4 20V9c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 6 7h2a.97.97 0 0 1 .713.287A.97.97 0 0 1 9 8c0 .283-.096.52-.287.712A.968.968 0 0 1 8 9H6v11h12V9h-2a.965.965 0 0 1-.712-.288A.965.965 0 0 1 15 8c0-.283.096-.521.288-.713A.967.967 0 0 1 16 7h2c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v11c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 22H6Z"
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

export default withTheme(IOSShare);
