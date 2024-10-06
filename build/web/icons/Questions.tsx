import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Questions = ({
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
      d="M2 4v15.575c0 .45.204.762.612.937.409.175.771.105 1.088-.212L6 18h14c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413V4c0-.55-.196-1.021-.587-1.413A1.928 1.928 0 0 0 20 2H4c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0 0 2 4Zm3.175 12L4 17.175V4h16v12H5.175Zm6.96-4.2a.753.753 0 0 0 .513-.213.875.875 0 0 0 .288-.537c.033-.217.112-.408.238-.575.124-.167.312-.375.562-.625.5-.5.833-.904 1-1.213.166-.308.25-.67.25-1.087 0-.75-.263-1.362-.788-1.837C13.673 5.238 12.986 5 12.136 5a2.891 2.891 0 0 0-2.55 1.45.557.557 0 0 0-.037.525.72.72 0 0 0 .412.4.714.714 0 0 0 .525 0c.183-.067.341-.192.475-.375.15-.2.325-.35.525-.45.2-.1.416-.15.65-.15.4 0 .725.112.975.337.25.225.375.53.375.913 0 .233-.067.454-.2.662-.134.209-.367.471-.7.788-.45.383-.75.692-.9.925-.15.233-.242.575-.275 1.025-.017.2.046.375.188.525.14.15.32.225.537.225Zm0 3.2c.284 0 .53-.104.739-.312.208-.209.312-.455.312-.738s-.104-.53-.312-.738a1.011 1.011 0 0 0-.738-.312c-.284 0-.53.104-.737.312a1.01 1.01 0 0 0-.313.738c0 .283.104.53.313.738.208.208.453.312.737.312Z"
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

export default withTheme(Questions);
