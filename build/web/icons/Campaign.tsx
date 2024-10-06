import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Campaign = ({
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
      d="M19 13a.965.965 0 0 1-.712-.288A.965.965 0 0 1 18 12c0-.283.096-.521.288-.713A.967.967 0 0 1 19 11h2c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 21 13h-2Zm-.6 6.4-1.6-1.2a.913.913 0 0 1-.4-.65 1.032 1.032 0 0 1 .2-.75.913.913 0 0 1 .65-.4c.267-.033.517.033.75.2l1.6 1.2a.913.913 0 0 1 .4.65c.033.267-.033.517-.2.75a.913.913 0 0 1-.65.4 1.032 1.032 0 0 1-.75-.2Zm-.4-12a1.033 1.033 0 0 1-.75.2.913.913 0 0 1-.65-.4 1.033 1.033 0 0 1-.2-.75.913.913 0 0 1 .4-.65l1.6-1.2c.233-.167.483-.233.75-.2a.913.913 0 0 1 .65.4c.167.233.233.483.2.75a.913.913 0 0 1-.4.65L18 7.4ZM5 19v-4H4c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 2 13v-2c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 4 9h4l3.475-2.1c.333-.2.671-.2 1.013 0 .341.2.512.492.512.875v8.45c0 .383-.17.675-.512.875-.342.2-.68.2-1.013 0L8 15H7v4H5Zm9-3.65v-6.7c.45.4.813.888 1.088 1.463.275.575.412 1.204.412 1.887s-.137 1.312-.412 1.887A4.571 4.571 0 0 1 14 15.35Zm-3-.9v-4.9L8.55 11H4v2h4.55L11 14.45Z"
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

export default withTheme(Campaign);
