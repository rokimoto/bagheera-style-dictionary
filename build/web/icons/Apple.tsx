import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Apple = ({
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
      d="M15.858 2a4.023 4.023 0 0 1-.92 2.882 3.384 3.384 0 0 1-2.672 1.263 3.827 3.827 0 0 1 .944-2.775A4.093 4.093 0 0 1 15.858 2Zm1.89 7.619c-.34.6-.523 1.275-.532 1.964a3.948 3.948 0 0 0 2.41 3.632 9.05 9.05 0 0 1-1.253 2.553c-.739 1.104-1.513 2.183-2.742 2.203-.584.014-.978-.154-1.39-.33-.428-.182-.875-.372-1.574-.372-.742 0-1.208.196-1.659.386-.389.163-.765.322-1.296.344-1.17.043-2.065-1.179-2.83-2.273-1.53-2.235-2.72-6.297-1.124-9.062a4.388 4.388 0 0 1 3.693-2.252c.664-.013 1.3.242 1.859.467.427.171.808.324 1.12.324.274 0 .645-.147 1.077-.318.68-.27 1.512-.6 2.36-.511a4.182 4.182 0 0 1 3.295 1.78 4.086 4.086 0 0 0-1.414 1.465Z"
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

export default withTheme(Apple);