import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Folder = ({
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
      d="M3 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 1 19V7c0-.283.096-.521.288-.713A.967.967 0 0 1 2 6a.97.97 0 0 1 .713.287A.97.97 0 0 1 3 7v12h16c.283 0 .52.096.712.288A.965.965 0 0 1 20 20c0 .283-.096.52-.288.712A.965.965 0 0 1 19 21H3Zm4-4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 5 15V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 7 2h4.175a1.978 1.978 0 0 1 1.4.575L14 4h7c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v9c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 21 17H7Zm0-2h14V6h-7.825l-2-2H7v11Zm0 0V4v11Z"
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

export default withTheme(Folder);
