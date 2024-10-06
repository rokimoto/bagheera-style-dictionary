import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const VisibilityOff = ({
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
      d="m16.1 13.3-1.45-1.45c.15-.783-.075-1.517-.675-2.2-.6-.683-1.375-.95-2.325-.8L10.2 7.4c.283-.133.57-.233.862-.3.292-.067.605-.1.938-.1 1.25 0 2.313.437 3.188 1.312S16.5 10.25 16.5 11.5c0 .333-.033.646-.1.938a4.237 4.237 0 0 1-.3.862Zm3.2 3.15-1.45-1.4a10.953 10.953 0 0 0 1.688-1.588A8.896 8.896 0 0 0 20.8 11.5c-.833-1.683-2.03-3.021-3.588-4.013C15.654 6.496 13.917 6 12 6c-.483 0-.958.033-1.425.1a9.624 9.624 0 0 0-1.375.3L7.65 4.85a11.106 11.106 0 0 1 2.1-.638A11.607 11.607 0 0 1 12 4c2.383 0 4.525.629 6.425 1.887 1.9 1.259 3.325 2.896 4.275 4.913.05.083.083.187.1.312s.025.255.025.388a1.987 1.987 0 0 1-.125.7 10.914 10.914 0 0 1-3.4 4.25Zm-.2 5.45-3.5-3.45c-.583.183-1.17.321-1.762.413-.592.091-1.205.137-1.838.137-2.383 0-4.525-.629-6.425-1.887-1.9-1.259-3.325-2.896-4.275-4.913a.813.813 0 0 1-.1-.313 2.919 2.919 0 0 1 0-.762.796.796 0 0 1 .1-.3c.35-.75.767-1.442 1.25-2.075A13.291 13.291 0 0 1 4.15 7L2.075 4.9a.933.933 0 0 1-.275-.688c0-.275.1-.512.3-.712a.948.948 0 0 1 .7-.275c.283 0 .517.092.7.275l17 17c.183.183.28.413.288.688a.931.931 0 0 1-.288.712.948.948 0 0 1-.7.275.949.949 0 0 1-.7-.275ZM5.55 8.4c-.483.433-.925.908-1.325 1.425A9.015 9.015 0 0 0 3.2 11.5c.833 1.683 2.029 3.02 3.587 4.012C8.346 16.504 10.083 17 12 17c.333 0 .658-.02.975-.062.317-.042.642-.088.975-.138l-.9-.95c-.183.05-.358.087-.525.112A3.496 3.496 0 0 1 12 16c-1.25 0-2.313-.437-3.188-1.312S7.5 12.75 7.5 11.5c0-.183.012-.358.037-.525a4.66 4.66 0 0 1 .113-.525L5.55 8.4Z"
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

export default withTheme(VisibilityOff);
