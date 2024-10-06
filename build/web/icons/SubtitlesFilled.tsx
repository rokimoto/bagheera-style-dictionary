import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SubtitlesFilled = ({
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
      d="M7 12a.968.968 0 0 0 .713-.288A.967.967 0 0 0 8 11a.97.97 0 0 0-.287-.713A.97.97 0 0 0 7 10a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 11c0 .283.096.52.287.712.192.192.43.288.713.288Zm0 4h6a.968.968 0 0 0 .713-.288A.967.967 0 0 0 14 15a.97.97 0 0 0-.287-.713A.97.97 0 0 0 13 14H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 15c0 .283.096.52.287.712.192.192.43.288.713.288Zm10 0c.283 0 .52-.096.712-.288A.965.965 0 0 0 18 15a.968.968 0 0 0-.288-.713A.967.967 0 0 0 17 14a.967.967 0 0 0-.712.287A.968.968 0 0 0 16 15c0 .283.096.52.288.712A.965.965 0 0 0 17 16Zm-6-4h6c.283 0 .52-.096.712-.288A.965.965 0 0 0 18 11a.968.968 0 0 0-.288-.713A.967.967 0 0 0 17 10h-6a.967.967 0 0 0-.712.287A.968.968 0 0 0 10 11c0 .283.096.52.288.712A.965.965 0 0 0 11 12Zm-7 8c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 20H4Z"
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

export default withTheme(SubtitlesFilled);
