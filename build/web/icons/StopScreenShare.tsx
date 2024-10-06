import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const StopScreenShare = ({
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
      d="M8.7 15.3a.948.948 0 0 0 .7.275.948.948 0 0 0 .7-.275l1.9-1.9 1.925 1.925a.918.918 0 0 0 .675.275c.267 0 .5-.1.7-.3a.948.948 0 0 0 .275-.7.948.948 0 0 0-.275-.7L13.4 12l1.925-1.925A.918.918 0 0 0 15.6 9.4c0-.267-.1-.5-.3-.7a.948.948 0 0 0-.7-.275.948.948 0 0 0-.7.275L12 10.6l-1.925-1.925A.918.918 0 0 0 9.4 8.4c-.267 0-.5.1-.7.3a.948.948 0 0 0-.275.7c0 .283.092.517.275.7l1.9 1.9-1.925 1.925a.918.918 0 0 0-.275.675c0 .267.1.5.3.7ZM4 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 20H4Zm0-2V6v12Zm0 0h16V6H4v12Z"
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

export default withTheme(StopScreenShare);
