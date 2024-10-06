import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const LinkedIn = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.183 3.75C3.863 3.75 3 4.618 3 5.756c0 1.114.836 2.006 2.132 2.006h.025c1.346 0 2.183-.892 2.183-2.006-.025-1.138-.837-2.006-2.157-2.006Zm1.904 5.597h-3.86v11.609h3.86V9.347Zm5.993 1.644c.513-.79 1.43-1.917 3.478-1.917C19.096 9.074 21 10.733 21 14.3v6.657h-3.858v-6.211c0-1.56-.56-2.625-1.955-2.625-1.066 0-1.701.718-1.98 1.41-.102.249-.127.596-.127.943v6.483H9.222s.05-10.52 0-11.609h3.858v1.644Z"
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

export default withTheme(LinkedIn);
