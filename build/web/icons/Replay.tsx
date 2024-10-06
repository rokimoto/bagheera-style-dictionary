import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Replay = ({
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
      d="M12 22c-2.333 0-4.346-.767-6.037-2.3C4.271 18.167 3.3 16.267 3.05 14a.82.82 0 0 1 .238-.7c.191-.2.429-.3.712-.3.267 0 .504.096.713.287.208.192.329.43.362.713.233 1.717 1 3.146 2.3 4.288C8.675 19.429 10.217 20 12 20c1.95 0 3.604-.68 4.962-2.038C18.321 16.604 19 14.95 19 13c0-1.95-.68-3.604-2.038-4.963C15.604 6.679 13.95 6 12 6h-.15l.875.875a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7c-.2.2-.441.3-.725.3a.908.908 0 0 1-.7-.3L8.7 5.7a.872.872 0 0 1-.212-.325A1.099 1.099 0 0 1 8.425 5c0-.133.021-.258.063-.375A.872.872 0 0 1 8.7 4.3l2.6-2.6a.948.948 0 0 1 .7-.275c.284 0 .525.092.725.275.184.2.275.442.275.725a.948.948 0 0 1-.275.7L11.85 4H12c1.25 0 2.421.238 3.513.713a9.151 9.151 0 0 1 2.85 1.924 9.167 9.167 0 0 1 1.925 2.85A8.715 8.715 0 0 1 21 13c0 1.25-.237 2.42-.712 3.512a9.151 9.151 0 0 1-1.925 2.85 9.156 9.156 0 0 1-2.85 1.926A8.715 8.715 0 0 1 12 22Z"
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

export default withTheme(Replay);
