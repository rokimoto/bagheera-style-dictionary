import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const AccountBalanceWalletFilled = ({
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
      d="M16 13.5c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075-.283-.283-.642-.425-1.075-.425-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075 0 .433.142.792.425 1.075.283.283.642.425 1.075.425ZM13 17c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 11 15V9c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 13 7h7c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 17h-7Zm-8 4c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413h-8c-1.183 0-2.146.37-2.887 1.112C9.371 6.854 9 7.817 9 9v6c0 1.183.371 2.146 1.113 2.887C10.854 18.629 11.817 19 13 19h8c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21H5Z"
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

export default withTheme(AccountBalanceWalletFilled);
