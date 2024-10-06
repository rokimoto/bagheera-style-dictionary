import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Image = ({
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
      d="M7 17h10c.2 0 .35-.092.45-.275a.44.44 0 0 0-.05-.525l-2.75-3.675a.475.475 0 0 0-.4-.2c-.167 0-.3.067-.4.2L11.25 16 9.4 13.525a.475.475 0 0 0-.4-.2c-.167 0-.3.067-.4.2l-2 2.675a.44.44 0 0 0-.05.525c.1.183.25.275.45.275Zm-2 4c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"
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

export default withTheme(Image);
