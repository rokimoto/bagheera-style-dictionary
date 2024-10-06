import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const MicOn = ({
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
      d="M12 14a2.893 2.893 0 0 1-2.125-.875A2.893 2.893 0 0 1 9 11V5c0-.833.292-1.542.875-2.125A2.893 2.893 0 0 1 12 2c.833 0 1.542.292 2.125.875S15 4.167 15 5v6c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0 1 12 14Zm0 7a.965.965 0 0 1-.712-.288A.965.965 0 0 1 11 20v-2.075c-1.55-.217-2.867-.867-3.95-1.95a6.855 6.855 0 0 1-1.975-3.9.839.839 0 0 1 .225-.75c.2-.217.467-.325.8-.325.233 0 .442.087.625.262.183.175.3.388.35.638.217 1.167.783 2.142 1.7 2.925C9.692 15.608 10.767 16 12 16s2.308-.392 3.225-1.175c.917-.783 1.483-1.758 1.7-2.925.05-.25.171-.463.363-.638a.923.923 0 0 1 .637-.262c.317 0 .575.108.775.325.2.217.275.467.225.75a6.856 6.856 0 0 1-1.975 3.9c-1.083 1.083-2.4 1.733-3.95 1.95V20c0 .283-.096.52-.287.712A.968.968 0 0 1 12 21Zm0-9a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 11V5a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 4a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 5v6c0 .283.096.52.288.712A.965.965 0 0 0 12 12Z"
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

export default withTheme(MicOn);
