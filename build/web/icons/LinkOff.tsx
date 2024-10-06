import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const LinkOff = ({
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
      d="M16 3a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Zm2 5a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2h-1a1 1 0 0 0-1 1ZM4.929 12c-.978-.978-1.467-2.157-1.467-3.536 0-1.378.489-2.557 1.467-3.535.978-.978 2.157-1.467 3.536-1.467S11.022 3.95 12 4.929l2.121 2.121c.2.2.301.436.302.707a.97.97 0 0 1-.302.707c-.2.2-.436.301-.706.301a.969.969 0 0 1-.708-.3l-2.121-2.122a2.893 2.893 0 0 0-2.122-.884c-.824 0-1.532.295-2.12.884a2.893 2.893 0 0 0-.885 2.121c0 .825.295 1.533.884 2.122l2.121 2.121c.2.2.301.436.302.707a.97.97 0 0 1-.302.707c-.2.2-.435.3-.706.3a.968.968 0 0 1-.708-.3L4.93 12Zm4.95 4.95c-.2-.2-.3-.436-.3-.707 0-.271.1-.507.3-.707.2-.2.436-.301.707-.301.271 0 .507.1.707.3l2.121 2.122c.59.59 1.297.884 2.122.884.824 0 1.532-.295 2.12-.884.59-.59.885-1.297.885-2.121 0-.825-.295-1.532-.884-2.122l-2.121-2.121c-.2-.2-.3-.436-.3-.707 0-.271.1-.507.3-.707.2-.2.436-.3.707-.3.27 0 .506.1.707.3L19.07 12c.978.978 1.468 2.157 1.468 3.536 0 1.378-.49 2.557-1.468 3.535-.978.978-2.156 1.467-3.535 1.467-1.38 0-2.558-.489-3.536-1.467L9.879 16.95ZM9 20a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1Zm-4-5a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1Z"
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

export default withTheme(LinkOff);
