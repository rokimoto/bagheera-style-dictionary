import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Replay5 = ({
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
      d="M5.963 19.7C7.654 21.233 9.667 22 12 22c1.25 0 2.421-.237 3.513-.712a9.156 9.156 0 0 0 2.85-1.926 9.151 9.151 0 0 0 1.925-2.85A8.708 8.708 0 0 0 21 13c0-1.25-.237-2.421-.712-3.513a9.167 9.167 0 0 0-1.925-2.85 9.151 9.151 0 0 0-2.85-1.924A8.705 8.705 0 0 0 12 4h-.15l.875-.875a.948.948 0 0 0 .275-.7c0-.283-.091-.525-.275-.725A1.035 1.035 0 0 0 12 1.425a.948.948 0 0 0-.7.275L8.7 4.3c-.1.1-.17.208-.212.325A1.099 1.099 0 0 0 8.425 5c0 .133.021.258.063.375A.872.872 0 0 0 8.7 5.7l2.6 2.575c.183.2.417.3.7.3.284 0 .525-.1.725-.3a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7L11.85 6H12c1.95 0 3.604.679 4.962 2.037C18.321 9.396 19 11.05 19 13c0 1.95-.68 3.604-2.038 4.962C15.604 19.321 13.95 20 12 20c-1.783 0-3.325-.57-4.625-1.712-1.3-1.142-2.067-2.571-2.3-4.288a1.118 1.118 0 0 0-.362-.713A1.026 1.026 0 0 0 4 13c-.283 0-.52.1-.712.3a.82.82 0 0 0-.238.7c.25 2.267 1.221 4.167 2.913 5.7Zm4.977-7.97-.25 2.17.67.16a1.03 1.03 0 0 0 .022-.023.29.29 0 0 1 .078-.067c.02-.01.04-.023.06-.035a.66.66 0 0 1 .21-.085c.05-.01.12-.02.2-.02.11 0 .22.02.3.05.08.03.15.08.21.15.06.07.1.14.13.24.03.1.04.2.04.31 0 .11 0 .21-.03.31s-.07.18-.11.25a.49.49 0 0 1-.45.23.65.65 0 0 1-.42-.15c-.11-.09-.17-.23-.19-.41h-.84c0 .2.05.38.13.53.08.15.18.29.32.39.14.1.29.19.46.24.17.05.35.08.53.08.25 0 .46-.05.64-.12.18-.07.33-.18.45-.31s.21-.28.27-.45c.06-.17.09-.35.09-.54 0-.22-.04-.42-.09-.6-.05-.18-.14-.33-.25-.45-.11-.12-.25-.21-.41-.28a1.35 1.35 0 0 0-.84-.06c-.03.008-.06.015-.09.02-.06.01-.11.03-.15.05-.017.008-.033.015-.05.021-.022.01-.043.017-.06.029l.11-.92h1.7v-.71h-2.39Z"
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

export default withTheme(Replay5);