import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Remix = ({
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
    <defs>
      <linearGradient id="prefix__a" x1={0} y1={0} x2={0} y2={1}>
        <stop offset={0} stopColor="#ff00fd" />
        <stop offset={0.19} stopColor="#ff00fb" />
        <stop offset={0.26} stopColor="#ff02f4" />
        <stop offset={0.31} stopColor="#ff06e8" />
        <stop offset={0.34} stopColor="#ff0bd7" />
        <stop offset={0.38} stopColor="#ff12c1" />
        <stop offset={0.41} stopColor="#ff1ba6" />
        <stop offset={0.44} stopColor="#ff2585" />
        <stop offset={0.46} stopColor="#ff3160" />
        <stop offset={0.48} stopColor="#ff3f35" />
        <stop offset={0.5} stopColor="#ff4d07" />
        <stop offset={0.51} stopColor="#ff5001" />
        <stop offset={0.51} stopColor="#f75109" />
        <stop offset={0.53} stopColor="#cc5837" />
        <stop offset={0.55} stopColor="#a35e62" />
        <stop offset={0.58} stopColor="#806487" />
        <stop offset={0.6} stopColor="#6169a8" />
        <stop offset={0.63} stopColor="#476dc3" />
        <stop offset={0.66} stopColor="#3370d9" />
        <stop offset={0.7} stopColor="#2372ea" />
        <stop offset={0.75} stopColor="#1874f6" />
        <stop offset={0.81} stopColor="#1175fd" />
        <stop offset={1} stopColor="#1076ff" />
      </linearGradient>
    </defs>
    <path
      d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
      fill="url(#prefix__a)"
    />
  </svg>
);

export default withTheme(Remix);
