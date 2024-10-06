import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ClosedCaptionOn = ({
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
      d="M7 15h3a.968.968 0 0 0 .713-.288A.967.967 0 0 0 11 14v-.625a.48.48 0 0 0-.15-.35.48.48 0 0 0-.35-.15H10a.48.48 0 0 0-.35.15.48.48 0 0 0-.15.35v.125h-2v-3h2v.125c0 .133.05.25.15.35.1.1.217.15.35.15h.5a.48.48 0 0 0 .35-.15c.1-.1.15-.217.15-.35V10a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 9H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 10v4c0 .283.096.52.287.712.192.192.43.288.713.288Zm7 0h3c.283 0 .52-.096.712-.288A.965.965 0 0 0 18 14v-.625a.48.48 0 0 0-.15-.35.48.48 0 0 0-.35-.15H17a.48.48 0 0 0-.35.15.48.48 0 0 0-.15.35v.125h-2v-3h2v.125c0 .133.05.25.15.35.1.1.217.15.35.15h.5a.48.48 0 0 0 .35-.15c.1-.1.15-.217.15-.35V10a.968.968 0 0 0-.288-.713A.967.967 0 0 0 17 9h-3a.967.967 0 0 0-.712.287A.968.968 0 0 0 13 10v4c0 .283.096.52.288.712A.965.965 0 0 0 14 15ZM5 4h14c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 20H5c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 18V6c0-.55.196-1.02.587-1.412A1.927 1.927 0 0 1 5 4Zm14 2H5v12h14V6ZM5 18V6v12Z"
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

export default withTheme(ClosedCaptionOn);
