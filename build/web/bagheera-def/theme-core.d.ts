export interface BorderRadius {
  /** Value: 2px */
  XS: string;
  /** Value: 4px */
  SM: string;
  /** Value: 8px */
  MD: string;
  /** Value: 12px */
  LG: string;
  /** Value: 16px */
  XL: string;
  /** Value: 24px */
  '2XL': string;
  /** Value: 32px */
  '3XL': string;
}

export interface BorderWidth {
  /** Value: 1px */
  '1': string;
  /** Value: 2px */
  '2': string;
  /** Value: 3px */
  '3': string;
  /** Value: 4px */
  '4': string;
}

export interface Elevation {
  /** Value: 0px 0px 4px 0px rgba(0, 0, 0, 0.7) */
  level1: string;
  /** Value: 0px 2px 12px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.06) */
  level2: string;
  /** Value: 0px 4px 16px 0px rgba(0, 0, 0, 0.24) */
  level3: string;
  /** Value: 0px 4px 24px 0px rgba(0, 0, 0, 0.32) */
  level4: string;
  /** Value: 0px 4px 40px 0px rgba(0, 0, 0, 0.12) */
  level5: string;
}

export interface LetterSpacing {
  /** Value: -0.04em */
  XS: string;
  /** Value: -0.02em */
  SM: string;
  /** Value: 0 */
  MD: string;
  /** Value: 0.08em */
  LG: string;
}

export interface LineHeight {
  /** Value: 16px */
  '25': string;
  /** Value: 18px */
  '50': string;
  /** Value: 20px */
  '100': string;
  /** Value: 24px */
  '200': string;
  /** Value: 28px */
  '300': string;
  /** Value: 32px */
  '400': string;
  /** Value: 36px */
  '500': string;
  /** Value: 40px */
  '600': string;
  /** Value: 44px */
  '700': string;
  /** Value: 52px */
  '800': string;
  /** Value: 1 */
  yolo: string;
}

export interface FontSize {
  /** Value: 12px */
  '25': string;
  /** Value: 14px */
  '50': string;
  /** Value: 16px */
  '100': string;
  /** Value: 18px */
  '200': string;
  /** Value: 20px */
  '300': string;
  /** Value: 24px */
  '400': string;
  /** Value: 28px */
  '500': string;
  /** Value: 32px */
  '600': string;
  /** Value: 36px */
  '700': string;
  /** Value: 40px */
  '800': string;
  /** Value: 48px */
  '900': string;
  /** Value: 64px */
  '1000': string;
  /** Value: 80px */
  '1100': string;
}

export interface Typeface {
  /** Value: owners, Helvetica, Arial */
  owners: string;
  /** Value: owners-text, Helvetica, Arial */
  ownersText: string;
  /** Value: owners-narrow, Helvetica, Arial */
  ownersNarrow: string;
}

export interface FontWeight {
  /** Value: 400 */
  regular: string;
  /** Value: 500 */
  medium: string;
  /** Value: 600 */
  semibold: string;
  /** Value: 700 */
  bold: string;
  /** Value: 800 */
  extrabold: string;
}

export interface Opacity {
  /** Value: 0.5 */
  '50': string;
  /** Value: 0.8 */
  '80': string;
  /** Value: 0.9 */
  '90': string;
}

export interface Spacing {
  /** Value: 4px */
  '2XS': string;
  /** Value: 8px */
  XS: string;
  /** Value: 12px */
  SM: string;
  /** Value: 16px */
  MD: string;
  /** Value: 24px */
  LG: string;
  /** Value: 32px */
  XL: string;
  /** Value: 40px */
  '2XL': string;
  /** Value: 48px */
  '3XL': string;
  /** Value: 56px */
  '4XL': string;
  /** Value: 64px */
  '5XL': string;
  /** Value: 80px */
  '6XL': string;
}

interface ThemeCore {
  /**
   * borderRadius:
   *
   * XS: 2px
   *
   * SM: 4px
   *
   * MD: 8px
   *
   * LG: 12px
   *
   * XL: 16px
   *
   * 2XL: 24px
   *
   * 3XL: 32px
   */
  borderRadius: BorderRadius;
  /**
   * borderWidth:
   *
   * 1: 1px
   *
   * 2: 2px
   *
   * 3: 3px
   *
   * 4: 4px
   */
  borderWidth: BorderWidth;
  /**
   * elevation:
   *
   * level1: 0px 0px 4px 0px rgba(0, 0, 0, 0.7)
   *
   * level2: 0px 2px 12px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.06)
   *
   * level3: 0px 4px 16px 0px rgba(0, 0, 0, 0.24)
   *
   * level4: 0px 4px 24px 0px rgba(0, 0, 0, 0.32)
   *
   * level5: 0px 4px 40px 0px rgba(0, 0, 0, 0.12)
   */
  elevation: Elevation;
  /**
   * letterSpacing:
   *
   * XS: -0.04em
   *
   * SM: -0.02em
   *
   * MD: 0
   *
   * LG: 0.08em
   */
  letterSpacing: LetterSpacing;
  /**
   * lineHeight:
   *
   * 25: 16px
   *
   * 50: 18px
   *
   * 100: 20px
   *
   * 200: 24px
   *
   * 300: 28px
   *
   * 400: 32px
   *
   * 500: 36px
   *
   * 600: 40px
   *
   * 700: 44px
   *
   * 800: 52px
   *
   * yolo: 1
   */
  lineHeight: LineHeight;
  /**
   * fontSize:
   *
   * 25: 12px
   *
   * 50: 14px
   *
   * 100: 16px
   *
   * 200: 18px
   *
   * 300: 20px
   *
   * 400: 24px
   *
   * 500: 28px
   *
   * 600: 32px
   *
   * 700: 36px
   *
   * 800: 40px
   *
   * 900: 48px
   *
   * 1000: 64px
   *
   * 1100: 80px
   */
  fontSize: FontSize;
  /**
   * typeface:
   *
   * owners: owners, Helvetica, Arial
   *
   * ownersText: owners-text, Helvetica, Arial
   *
   * ownersNarrow: owners-narrow, Helvetica, Arial
   */
  typeface: Typeface;
  /**
   * fontWeight:
   *
   * regular: 400
   *
   * medium: 500
   *
   * semibold: 600
   *
   * bold: 700
   *
   * extrabold: 800
   */
  fontWeight: FontWeight;
  /**
   * opacity:
   *
   * 50: 0.5
   *
   * 80: 0.8
   *
   * 90: 0.9
   */
  opacity: Opacity;
  /**
   * spacing:
   *
   * 2XS: 4px
   *
   * XS: 8px
   *
   * SM: 12px
   *
   * MD: 16px
   *
   * LG: 24px
   *
   * XL: 32px
   *
   * 2XL: 40px
   *
   * 3XL: 48px
   *
   * 4XL: 56px
   *
   * 5XL: 64px
   *
   * 6XL: 80px
   */
  spacing: Spacing;
}

export default ThemeCore;
