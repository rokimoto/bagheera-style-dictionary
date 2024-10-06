import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Repeat = ({
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
      d="M17 17v-3c0-.283.096-.521.288-.713A.967.967 0 0 1 18 13a.99.99 0 0 1 .712.275.926.926 0 0 1 .288.7V18c0 .283-.096.52-.288.712A.965.965 0 0 1 18 19H6.85l.825.825c.2.2.304.442.313.725a.947.947 0 0 1-.288.725c-.2.2-.437.3-.712.3A.934.934 0 0 1 6.3 21.3l-2.6-2.6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7l2.575-2.575c.2-.2.438-.3.713-.3.275 0 .512.1.712.3.2.2.3.438.3.713 0 .275-.1.512-.3.712l-.85.85H17ZM7 7v3c0 .283-.096.52-.287.712A.968.968 0 0 1 6 11a.993.993 0 0 1-.713-.275.928.928 0 0 1-.287-.7V6a.97.97 0 0 1 .287-.713A.97.97 0 0 1 6 5h11.15l-.825-.825c-.2-.2-.304-.442-.312-.725a.944.944 0 0 1 .287-.725c.2-.2.438-.3.713-.3.275 0 .504.092.687.275l2.6 2.6a.948.948 0 0 1 .275.7.948.948 0 0 1-.275.7l-2.575 2.575c-.2.2-.437.3-.712.3a.974.974 0 0 1-.713-.3c-.2-.2-.3-.438-.3-.713 0-.275.1-.512.3-.712l.85-.85H7Z"
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

export default withTheme(Repeat);
