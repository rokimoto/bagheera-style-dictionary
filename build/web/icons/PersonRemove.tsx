import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const PersonRemove = ({
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
      d="M17 11a.965.965 0 0 1-.712-.288A.965.965 0 0 1 16 10c0-.283.096-.521.288-.713A.967.967 0 0 1 17 9h4c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0 1 21 11h-4Zm-8 1c-1.1 0-2.042-.392-2.825-1.175C5.392 10.042 5 9.1 5 8s.392-2.042 1.175-2.825C6.958 4.392 7.9 4 9 4s2.042.392 2.825 1.175C12.608 5.958 13 6.9 13 8s-.392 2.042-1.175 2.825C11.042 11.608 10.1 12 9 12Zm-7 8a.965.965 0 0 1-.712-.288A.965.965 0 0 1 1 19v-1.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 0 1 2.6 14.55a14.866 14.866 0 0 1 3.15-1.163A13.776 13.776 0 0 1 9 13c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563V19c0 .283-.096.52-.288.712A.965.965 0 0 1 16 20H2Zm1-2h12v-.8a.943.943 0 0 0-.137-.5.977.977 0 0 0-.363-.35c-.9-.45-1.808-.788-2.725-1.013a11.615 11.615 0 0 0-5.55 0c-.917.225-1.825.563-2.725 1.013a.97.97 0 0 0-.5.85v.8Zm6-8c.55 0 1.021-.196 1.413-.588C10.804 9.021 11 8.55 11 8c0-.55-.196-1.02-.587-1.412A1.927 1.927 0 0 0 9 6c-.55 0-1.02.196-1.412.588A1.923 1.923 0 0 0 7 8c0 .55.196 1.02.588 1.412C7.979 9.804 8.45 10 9 10Z"
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

export default withTheme(PersonRemove);
