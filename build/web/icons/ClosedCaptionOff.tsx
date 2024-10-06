import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const ClosedCaptionOff = ({
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
      d="M6.875 4H19c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12.125l-2-2V6H8.875l-2-2Zm9.625 9.5c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h.5c.133 0 .25.05.35.15.1.1.15.217.15.35v.5c0 .15-.029.296-.087.438a.765.765 0 0 1-.263.337L16.375 13.5h.125ZM14 9h3c.283 0 .52.096.712.287.192.192.288.43.288.713v.625a.48.48 0 0 1-.15.35.48.48 0 0 1-.35.15H17a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V10.5h-2v1.125l-1.5-1.5V10c0-.283.096-.521.288-.713A.967.967 0 0 1 14 9ZM9.025 9l1.5 1.5H7.5v3h2v-.125c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h.5c.133 0 .25.05.35.15.1.1.15.217.15.35V14c0 .283-.096.52-.287.712A.968.968 0 0 1 10 15H7a.968.968 0 0 1-.713-.288A.967.967 0 0 1 6 14v-4a.97.97 0 0 1 .287-.713A.97.97 0 0 1 7 9h2.025ZM4.2 4.175 6.025 6H5v12h10.175L1.375 4.2c-.2-.2-.3-.438-.3-.713 0-.275.1-.512.3-.712.2-.2.437-.3.712-.3.275 0 .513.1.713.3l18.4 18.4c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.437.3-.712.3a.974.974 0 0 1-.713-.3L17.175 20H5c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 18V6c0-.417.113-.788.338-1.113.225-.325.512-.562.862-.712Z"
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

export default withTheme(ClosedCaptionOff);
