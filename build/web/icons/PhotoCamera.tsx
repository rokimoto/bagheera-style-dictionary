import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const PhotoCamera = ({
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
      d="M12 17.5c1.25 0 2.313-.438 3.188-1.313.874-.875 1.312-1.937 1.312-3.187 0-1.25-.438-2.313-1.313-3.188C14.313 8.938 13.25 8.5 12 8.5c-1.25 0-2.313.438-3.188 1.313C7.939 10.687 7.5 11.75 7.5 13c0 1.25.438 2.313 1.313 3.188.874.875 1.937 1.312 3.187 1.312ZM4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 19V7c0-.55.196-1.02.587-1.412A1.926 1.926 0 0 1 4 5h3.15L8.4 3.65c.183-.217.404-.38.662-.487A2.08 2.08 0 0 1 9.876 3h4.25c.283 0 .554.054.813.163.258.108.479.27.662.487L16.85 5H20c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 21H4Zm16-2V7H4v12h16Z"
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

export default withTheme(PhotoCamera);
