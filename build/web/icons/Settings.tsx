import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { IconProps } from './index';
import { isHex } from '@/helpers/validators';

const Settings = ({
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
      d="M13.875 22h-3.75a.934.934 0 0 1-.65-.25.997.997 0 0 1-.325-.625l-.3-2.325a3.772 3.772 0 0 1-.612-.3 8.197 8.197 0 0 1-.563-.375l-2.175.9a1.119 1.119 0 0 1-.7.025.93.93 0 0 1-.55-.425L2.4 15.4a.94.94 0 0 1-.125-.7.96.96 0 0 1 .375-.6l1.875-1.425a2.391 2.391 0 0 1-.025-.338v-.675c0-.108.008-.22.025-.337L2.65 9.9a.96.96 0 0 1-.375-.6.94.94 0 0 1 .125-.7l1.85-3.225a.788.788 0 0 1 .537-.438c.242-.058.48-.045.713.038l2.175.9c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.3-2.325a.997.997 0 0 1 .325-.625c.183-.167.4-.25.65-.25h3.75c.25 0 .467.083.65.25a.997.997 0 0 1 .325.625l.3 2.325c.217.083.421.183.613.3.191.117.379.242.562.375l2.175-.9c.233-.083.467-.092.7-.025a.93.93 0 0 1 .55.425L21.6 8.6a.94.94 0 0 1 .125.7.96.96 0 0 1-.375.6l-1.875 1.425c.017.117.025.229.025.337v.675c0 .109-.017.221-.05.338l1.875 1.425c.2.15.325.35.375.6a.94.94 0 0 1-.125.7l-1.85 3.2a.985.985 0 0 1-.562.438c-.242.075-.48.07-.713-.013l-2.125-.9a6.826 6.826 0 0 1-.575.375c-.2.117-.4.217-.6.3l-.3 2.325a.997.997 0 0 1-.325.625.934.934 0 0 1-.65.25Zm-1.825-6.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 15.55 12c0-.967-.342-1.792-1.025-2.475A3.372 3.372 0 0 0 12.05 8.5c-.983 0-1.813.342-2.488 1.025A3.394 3.394 0 0 0 8.55 12c0 .967.337 1.792 1.012 2.475S11.067 15.5 12.05 15.5Zm0-2c-.417 0-.77-.146-1.062-.438A1.444 1.444 0 0 1 10.55 12c0-.417.146-.77.438-1.062a1.444 1.444 0 0 1 1.062-.438c.417 0 .771.146 1.063.438.291.291.437.645.437 1.062 0 .417-.146.77-.437 1.062a1.447 1.447 0 0 1-1.063.438ZM11 20h1.975l.35-2.65a5.6 5.6 0 0 0 1.438-.588c.441-.258.845-.57 1.212-.937l2.475 1.025.975-1.7-2.15-1.625c.083-.233.142-.48.175-.738a6.142 6.142 0 0 0 0-1.575 3.529 3.529 0 0 0-.175-.737l2.15-1.625-.975-1.7-2.475 1.05a5.573 5.573 0 0 0-1.212-.963 5.624 5.624 0 0 0-1.438-.587L13 4h-1.975l-.35 2.65a5.608 5.608 0 0 0-1.437.587 5.984 5.984 0 0 0-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6c-.083.25-.142.5-.175.75s-.05.517-.05.8c0 .267.017.525.05.775s.092.5.175.75l-2.15 1.625.975 1.7 2.475-1.05a5.537 5.537 0 0 0 2.65 1.55L11 20Z"
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

export default withTheme(Settings);