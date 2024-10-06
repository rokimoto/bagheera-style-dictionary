import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const OpenInNew = ({
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
      d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0 1 3 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 0 1 5 3h6a.97.97 0 0 1 .713.287A.97.97 0 0 1 12 4c0 .283-.096.52-.287.712A.968.968 0 0 1 11 5H5v14h14v-6c0-.283.096-.521.288-.713A.967.967 0 0 1 20 12c.283 0 .52.096.712.287.192.192.288.43.288.713v6c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 19 21H5Zm4-6a.948.948 0 0 1-.275-.7c0-.283.092-.517.275-.7L17.6 5H15a.965.965 0 0 1-.712-.288A.965.965 0 0 1 14 4c0-.283.096-.521.288-.713A.967.967 0 0 1 15 3h5c.283 0 .52.096.712.287.192.192.288.43.288.713v5c0 .283-.096.52-.288.712A.965.965 0 0 1 20 10a.965.965 0 0 1-.712-.288A.965.965 0 0 1 19 9V6.4l-8.625 8.625a.918.918 0 0 1-.675.275.96.96 0 0 1-.7-.3Z"
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

export default withTheme(OpenInNew);
