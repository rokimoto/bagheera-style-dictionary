export interface ActionColor {
  /** Value: #4966D7 */
  brand: string;
  /** Value: #E4F882 */
  brandAlt: string;
  /** Value: rgba(200, 197, 190, 0.2) */
  hover: string;
  /** Value: rgba(200, 197, 190, 0.4) */
  pressed: string;
  /** Value: rgba(255, 255, 255, 0.16) */
  inverseHover: string;
  /** Value: rgba(255, 255, 255, 0.24) */
  inversePressed: string;
  /** Value: rgba(73, 102, 215, 0.25) */
  selected: string;
}

export interface BackgroundColor {
  /** Value: #F8F7F5 */
  body: string;
  /** Value: #FFFFFF */
  primary: string;
  /** Value: #F5F3EF */
  secondary: string;
  /** Value: #EFECE6 */
  tertiary: string;
  /** Value: #000000 */
  inversePrimary: string;
  /** Value: #252526 */
  inverseSecondary: string;
  /** Value: rgba(0, 0, 0, 0.75) */
  scrim: string;
  /** Value: rgba(37, 37, 38, 0.4) */
  blackTransparent: string;
  /** Value: #FFDBDB */
  subduedNegative: string;
  /** Value: #DF1027 */
  negative: string;
  /** Value: #FFEBC4 */
  subduedWarning: string;
  /** Value: #F9BE76 */
  warning: string;
  /** Value: #DCFAE6 */
  subduedPositive: string;
  /** Value: #32A171 */
  positive: string;
  /** Value: #E4EBFF */
  subduedInformational: string;
  /** Value: #4966D7 */
  informational: string;
  /** Value: #F5F3EF */
  disabled: string;
  /** Value: #FFFFFF */
  white: string;
  /** Value: #3D3D3E */
  inverseDisabled: string;
  /** Value: #131313 */
  black: string;
  /** Value: transparent */
  transparent: string;
}

export interface BorderColor {
  /** Value: #C8C5BE */
  default: string;
  /** Value: #E5E2DC */
  subdued: string;
  /** Value: #252526 */
  primary: string;
  /** Value: #6D6F6F */
  inverse: string;
  /** Value: #3D3D3E */
  inverseSubdued: string;
  /** Value: #FFFFFF */
  inversePrimary: string;
  /** Value: #DF1027 */
  negative: string;
  /** Value: #FFFFFF */
  white: string;
}

export interface ContentColor {
  /** Value: #252526 */
  default: string;
  /** Value: #555657 */
  subdued: string;
  /** Value: #6D6F6F */
  moreSubdued: string;
  /** Value: #C8C5BE */
  disabled: string;
  /** Value: #FFFFFF */
  inverse: string;
  /** Value: #D0D1CF */
  inverseSubdued: string;
  /** Value: #9EA09E */
  inverseMoreSubdued: string;
  /** Value: #555657 */
  inverseDisabled: string;
  /** Value: #DF1027 */
  negative: string;
  /** Value: #04724D */
  positive: string;
  /** Value: #A72F04 */
  warning: string;
  /** Value: #E4F882 */
  brand: string;
  /** Value: #FFFFFF */
  white: string;
  /** Value: #252526 */
  black: string;
  /** Value: #4966D7 */
  accent: string;
}

export interface FocusColor {
  /** Value: rgba(37, 37, 38, 0.12) */
  default: string;
  /** Value: rgba(255, 255, 255, 0.32) */
  inverse: string;
}

interface ThemeMode {
  /**
   * actionColor:
   *
   * brand: #4966D7
   *
   * brandAlt: #E4F882
   *
   * hover: rgba(200, 197, 190, 0.2)
   *
   * pressed: rgba(200, 197, 190, 0.4)
   *
   * inverseHover: rgba(255, 255, 255, 0.16)
   *
   * inversePressed: rgba(255, 255, 255, 0.24)
   *
   * selected: rgba(73, 102, 215, 0.25)
   */
  actionColor: ActionColor;
  /**
   * backgroundColor:
   *
   * body: #F8F7F5
   *
   * primary: #FFFFFF
   *
   * secondary: #F5F3EF
   *
   * tertiary: #EFECE6
   *
   * inversePrimary: #000000
   *
   * inverseSecondary: #252526
   *
   * scrim: rgba(0, 0, 0, 0.75)
   *
   * blackTransparent: rgba(37, 37, 38, 0.4)
   *
   * subduedNegative: #FFDBDB
   *
   * negative: #DF1027
   *
   * subduedWarning: #FFEBC4
   *
   * warning: #F9BE76
   *
   * subduedPositive: #DCFAE6
   *
   * positive: #32A171
   *
   * subduedInformational: #E4EBFF
   *
   * informational: #4966D7
   *
   * disabled: #F5F3EF
   *
   * white: #FFFFFF
   *
   * inverseDisabled: #3D3D3E
   *
   * black: #131313
   *
   * transparent: transparent
   */
  backgroundColor: BackgroundColor;
  /**
   * borderColor:
   *
   * default: #C8C5BE
   *
   * subdued: #E5E2DC
   *
   * primary: #252526
   *
   * inverse: #6D6F6F
   *
   * inverseSubdued: #3D3D3E
   *
   * inversePrimary: #FFFFFF
   *
   * negative: #DF1027
   *
   * white: #FFFFFF
   */
  borderColor: BorderColor;
  /**
   * contentColor:
   *
   * default: #252526
   *
   * subdued: #555657
   *
   * moreSubdued: #6D6F6F
   *
   * disabled: #C8C5BE
   *
   * inverse: #FFFFFF
   *
   * inverseSubdued: #D0D1CF
   *
   * inverseMoreSubdued: #9EA09E
   *
   * inverseDisabled: #555657
   *
   * negative: #DF1027
   *
   * positive: #04724D
   *
   * warning: #A72F04
   *
   * brand: #E4F882
   *
   * white: #FFFFFF
   *
   * black: #252526
   *
   * accent: #4966D7
   */
  contentColor: ContentColor;
  /**
   * focusColor:
   *
   * default: rgba(37, 37, 38, 0.12)
   *
   * inverse: rgba(255, 255, 255, 0.32)
   */
  focusColor: FocusColor;
}

export default ThemeMode;
