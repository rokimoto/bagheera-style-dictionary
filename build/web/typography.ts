import { css } from 'styled-components';
import { media } from '@/styles/breakpoints';

export const getDisplayXL = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 40px;
    line-height: 44px;
  `}
`;

export const getDisplayXLDesktop = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 80px;
    line-height: 1;
  `}
`;
export const getDisplayLG = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 40px;
    line-height: 44px;
  `}
`;

export const getDisplayLGDesktop = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 64px;
    line-height: 1;
  `}
`;
export const getDisplayMD = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 32px;
    line-height: 36px;
  `}
`;

export const getDisplayMDDesktop = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 48px;
    line-height: 52px;
  `}
`;
export const getHeadingLG = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 28px;
    line-height: 32px;
  `}
`;

export const getHeadingLGDesktop = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 32px;
    line-height: 36px;
  `}
`;
export const getHeadingMD = css`
  ${({ theme }) => `
    font-family: owners, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0;
    font-size: 24px;
    line-height: 28px;
  `}
`;
export const getHeadingSM = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 700;
    letter-spacing: 0;
    font-size: 20px;
    line-height: 24px;
  `}
`;
export const getHeadingXS = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 700;
    letter-spacing: 0;
    font-size: 16px;
    line-height: 20px;
  `}
`;
export const getHeading2XS = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 700;
    letter-spacing: 0;
    font-size: 14px;
    line-height: 18px;
  `}
`;
export const getParagraphLG = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 400;
    letter-spacing: 0;
    font-size: 18px;
    line-height: 24px;
  `}
`;

export const getParagraphLGDesktop = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 400;
    letter-spacing: 0;
    font-size: 20px;
    line-height: 28px;
  `}
`;
export const getParagraphMD = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 400;
    letter-spacing: 0;
    font-size: 16px;
    line-height: 24px;
  `}
`;
export const getParagraphSM = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 400;
    letter-spacing: 0;
    font-size: 14px;
    line-height: 20px;
  `}
`;
export const getParagraphXS = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 400;
    letter-spacing: 0;
    font-size: 12px;
    line-height: 16px;
  `}
`;
export const getButtonLabelMD = css`
  font-family: owners-text, Helvetica, Arial;
  font-weight: 500;
  letter-spacing: 0;
  font-size: 16px;
  line-height: 24px;
`;
export const getButtonLabelSM = css`
  font-family: owners-text, Helvetica, Arial;
  font-weight: 500;
  letter-spacing: 0;
  font-size: 14px;
  line-height: 20px;
`;
export const getEyebrowMD = css`
  ${({ theme }) => `
    font-family: owners-narrow, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1;
  `}
`;
export const getEyebrowSM = css`
  ${({ theme }) => `
    font-family: owners-text, Helvetica, Arial;
    color: ${theme.contentColor.default};
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 1;
  `}
`;
export const getLink = css`
  ${({ theme }) => `
    color: ${theme.contentColor.accent};
    font-weight: 700;
    cursor: pointer;

    &:hover,
    &:active {
      text-decoration: underline;
    }
  `}
`;

export const getBold = css`
  font-weight: 500;
`;

const Ag = {
  DisplayXL: css`
    ${getDisplayXL}

    ${media.LG} {
      ${getDisplayXLDesktop}
    }
  `,
  DisplayLG: css`
    ${getDisplayLG}

    ${media.LG} {
      ${getDisplayLGDesktop}
    }
  `,
  DisplayMD: css`
    ${getDisplayMD}

    ${media.LG} {
      ${getDisplayMDDesktop}
    }
  `,
  HeadingLG: css`
    ${getHeadingLG}

    ${media.LG} {
      ${getHeadingLGDesktop}
    }
  `,
  HeadingMD: css`
    ${getHeadingMD}
  `,
  HeadingSM: css`
    ${getHeadingSM}
  `,
  HeadingXS: css`
    ${getHeadingXS}
  `,
  Heading2XS: css`
    ${getHeading2XS}
  `,
  ParagraphLG: css`
    ${getParagraphLG}

    ${media.LG} {
      ${getParagraphLGDesktop}
    }
  `,
  ParagraphMD: css`
    ${getParagraphMD}
  `,
  ParagraphSM: css`
    ${getParagraphSM}
  `,
  ParagraphXS: css`
    ${getParagraphXS}
  `,
  ButtonLabelMD: css`
    ${getButtonLabelMD}
  `,
  ButtonLabelSM: css`
    ${getButtonLabelSM}
  `,
  EyebrowMD: css`
    ${getEyebrowMD}
  `,
  EyebrowSM: css`
    ${getEyebrowSM}
  `,
  Link: css`
    ${getLink}
  `,
  Bold: css`
    ${getBold}
  `,
};

export default Ag;
