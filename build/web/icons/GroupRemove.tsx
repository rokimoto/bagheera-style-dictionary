import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const GroupRemove = ({
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
      d="M12.5 11.95a5.695 5.695 0 0 0 1.113-1.825A5.967 5.967 0 0 0 14 8c0-.733-.129-1.442-.387-2.125A5.695 5.695 0 0 0 12.5 4.05c1 .133 1.833.575 2.5 1.325S16 7 16 8s-.333 1.875-1 2.625a3.938 3.938 0 0 1-2.5 1.325ZM17.525 20c.15-.117.267-.263.35-.438.083-.175.125-.37.125-.587V17c0-.6-.133-1.17-.4-1.712a5.109 5.109 0 0 0-1.05-1.438c.85.3 1.638.687 2.363 1.162C19.638 15.487 20 16.15 20 17v2c0 .283-.096.52-.288.712A.965.965 0 0 1 19 20h-1.475ZM19 11a.965.965 0 0 1-.712-.288A.965.965 0 0 1 18 10c0-.283.096-.521.288-.713A.967.967 0 0 1 19 9h4c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 23 11h-4ZM8 12c-1.1 0-2.042-.392-2.825-1.175C4.392 10.042 4 9.1 4 8s.392-2.042 1.175-2.825C5.958 4.392 6.9 4 8 4s2.042.392 2.825 1.175C11.608 5.958 12 6.9 12 8s-.392 2.042-1.175 2.825C10.042 11.608 9.1 12 8 12Zm-7 8a.965.965 0 0 1-.712-.288A.965.965 0 0 1 0 19v-1.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 0 1 1.6 14.55a14.866 14.866 0 0 1 3.15-1.163A13.776 13.776 0 0 1 8 13c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563V19c0 .283-.096.52-.287.712A.968.968 0 0 1 15 20H1Zm7-10c.55 0 1.021-.196 1.413-.588C9.804 9.021 10 8.55 10 8c0-.55-.196-1.02-.587-1.412A1.927 1.927 0 0 0 8 6c-.55 0-1.02.196-1.412.588A1.923 1.923 0 0 0 6 8c0 .55.196 1.02.588 1.412C6.979 9.804 7.45 10 8 10Zm-6 8h12v-.8a.943.943 0 0 0-.137-.5.977.977 0 0 0-.363-.35c-.9-.45-1.808-.788-2.725-1.013a11.615 11.615 0 0 0-5.55 0c-.917.225-1.825.563-2.725 1.013a.97.97 0 0 0-.5.85v.8Z"
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

export default withTheme(GroupRemove);
