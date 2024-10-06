import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ContentCopy = ({
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
      d="M9 18c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 7 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 9 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 18 18H9Zm0-2h9V4H9v12Zm-4 6c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 20V7c0-.283.096-.521.288-.713A.967.967 0 0 1 4 6a.97.97 0 0 1 .713.287A.97.97 0 0 1 5 7v13h10c.283 0 .521.096.713.288A.967.967 0 0 1 16 21c0 .283-.096.52-.287.712A.968.968 0 0 1 15 22H5ZM9 4v12V4Z"
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

export default withTheme(ContentCopy);
