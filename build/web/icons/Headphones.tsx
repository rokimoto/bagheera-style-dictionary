import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Headphones = ({
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
      d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19v-7c0-1.25.237-2.421.712-3.513a9.159 9.159 0 0 1 1.926-2.85 9.152 9.152 0 0 1 2.85-1.925A8.709 8.709 0 0 1 12 3c1.25 0 2.421.237 3.513.712a9.168 9.168 0 0 1 2.85 1.925 9.167 9.167 0 0 1 1.925 2.85A8.715 8.715 0 0 1 21 12v7c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21h-2c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 15 19v-4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 17 13h2v-1c0-1.95-.68-3.604-2.038-4.963C15.604 5.679 13.95 5 12 5c-1.95 0-3.604.679-4.962 2.037C5.679 8.396 5 10.05 5 12v1h2c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413v4c0 .55-.196 1.021-.588 1.413A1.925 1.925 0 0 1 7 21H5Zm0-2h2v-4H5v4Zm12 0h2v-4h-2v4ZM5 19h2-2Zm12 0h2-2Z"
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

export default withTheme(Headphones);
