import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const SpeakerView = ({
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
      d="M4 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0 1 2 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 4 4h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0 1 20 20H4Zm16-2h-1.1a7.619 7.619 0 0 0-2.9-2.938A7.9 7.9 0 0 0 12 14a7.9 7.9 0 0 0-4 1.062A7.619 7.619 0 0 0 5.1 18H4V6h16v12Zm-5.562-1.475c.775.35 1.445.842 2.012 1.475h-8.9a6.272 6.272 0 0 1 2.025-1.475A5.772 5.772 0 0 1 12 16c.85 0 1.663.175 2.438.525Zm-.313-4.4A2.893 2.893 0 0 1 12 13a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 9 10c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 12 7c.833 0 1.542.292 2.125.875S15 9.167 15 10s-.292 1.542-.875 2.125Zm-2.837-1.413A.965.965 0 0 0 12 11a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 10a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 9a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 10c0 .283.096.52.288.712Z"
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

export default withTheme(SpeakerView);
