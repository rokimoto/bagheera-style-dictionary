import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Credits = ({
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
      d="M11.641 20.875c-.283 0-.558-.063-.825-.188a2.076 2.076 0 0 1-.7-.537L2.466 11c-.25-.3-.4-.65-.45-1.05-.05-.4.017-.775.2-1.125L4.091 5.1c.183-.333.43-.6.738-.8.308-.2.654-.3 1.037-.3h11.55c.383 0 .73.1 1.038.3.308.2.554.467.737.8l1.875 3.725c.183.35.25.725.2 1.125-.05.4-.2.75-.45 1.05l-7.65 9.15c-.2.233-.433.413-.7.538a1.923 1.923 0 0 1-.825.187ZM9.266 9h4.75l-1.5-3h-1.75l-1.5 3Zm1.375 8.675V11h-5.55l5.55 6.675Zm2 0L18.191 11h-5.55v6.675ZM16.241 9h2.65l-1.5-3h-2.65l1.5 3ZM4.391 9h2.65l1.5-3h-2.65l-1.5 3Z"
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

export default withTheme(Credits);
