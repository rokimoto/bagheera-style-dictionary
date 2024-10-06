import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VideoLibraryFilled = ({
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
      d="m13.05 13.5 4.15-2.65a.95.95 0 0 0 .475-.85.95.95 0 0 0-.475-.85L13.05 6.5c-.333-.233-.675-.25-1.025-.05-.35.2-.525.492-.525.875v5.35c0 .383.175.675.525.875.35.2.692.183 1.025-.05ZM8 18c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 6 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 8 2h12c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 18H8Zm-4 4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 20V7c0-.283.096-.521.288-.713A.967.967 0 0 1 3 6a.97.97 0 0 1 .713.287A.97.97 0 0 1 4 7v13h13c.283 0 .52.096.712.288A.965.965 0 0 1 18 21c0 .283-.096.52-.288.712A.965.965 0 0 1 17 22H4Z"
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

export default withTheme(VideoLibraryFilled);
