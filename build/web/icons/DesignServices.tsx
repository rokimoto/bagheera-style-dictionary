import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const DesignServices = ({
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
      d="M18.85 9.4 14.6 5.15l1.425-1.425a1.92 1.92 0 0 1 1.413-.575 1.92 1.92 0 0 1 1.412.575l1.425 1.425c.383.383.575.854.575 1.412a1.92 1.92 0 0 1-.575 1.413L18.85 9.4ZM3 21v-4.25l4.5-4.5-5.275-5.325L6.95 2.2l5.3 5.325L14.6 5.15l4.25 4.25-2.35 2.35 5.275 5.325-4.7 4.7-5.325-5.3L7.25 21H3Zm5.925-10.175 1.9-1.9-1.2-1.2-1.2 1.175-1.4-1.4L8.2 6.3 6.925 5.05 5.05 6.95l3.875 3.875Zm8.125 8.125 1.9-1.9-1.275-1.25-1.175 1.175-1.425-1.4 1.2-1.2-1.225-1.2-1.9 1.9 3.9 3.875ZM5 19h1.4l9.625-9.6L14.6 7.975 5 17.6V19Z"
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

export default withTheme(DesignServices);
