import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const HeadphonesOff = ({
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
      d="m21.1 18.15-2-2V14h-2v.15l-1.475-1.475c.167-.2.375-.362.625-.487s.533-.188.85-.188h2v-1c0-1.967-.683-3.625-2.05-4.975C15.683 4.675 14.033 4 12.1 4c-.733 0-1.43.104-2.088.312A6.68 6.68 0 0 0 8.2 5.2L6.75 3.8a8.45 8.45 0 0 1 2.488-1.338A8.848 8.848 0 0 1 12.1 2c1.233 0 2.396.233 3.488.7a9.02 9.02 0 0 1 2.862 1.925 9.2 9.2 0 0 1 1.938 2.862A8.715 8.715 0 0 1 21.1 11v7.15Zm-5.412 1.263c.391.391.862.587 1.412.587l2.825 2.825c.133.133.33.192.588.175.258-.017.487-.125.687-.325.183-.2.275-.438.275-.713a.932.932 0 0 0-.275-.687L2.825 2.875a.918.918 0 0 0-.7-.288c-.267.009-.5.105-.7.288-.2.2-.304.433-.312.7-.009.267.087.5.287.7L4.075 6.95a8.323 8.323 0 0 0-.737 1.937A9.002 9.002 0 0 0 3.1 11v7c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587h2c.55 0 1.02-.196 1.412-.587.392-.392.588-.863.588-1.413v-4c0-.55-.196-1.021-.588-1.413A1.925 1.925 0 0 0 7.1 12h-2v-1c0-.45.042-.883.125-1.3.083-.417.2-.825.35-1.225L15.1 18c0 .55.196 1.021.588 1.413ZM7.1 18h-2v-4h2v4Z"
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

export default withTheme(HeadphonesOff);
