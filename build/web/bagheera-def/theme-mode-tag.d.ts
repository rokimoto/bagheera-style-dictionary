import {
  ContentColors,
  BackgroundColors,
  Hex,
} from '@/types';

interface Tag {
  backgroundColor: BackgroundColors;
  color: ContentColors;
  iconColor: ContentColors | Hex;
}

export interface Tags {
  neutral: Tag;
  red: Tag;
  green: Tag;
  orange: Tag;
  pink: Tag;
  blue: Tag;
  'red bold': Tag;
  'green bold': Tag;
  'orange bold': Tag;
  'pink bold': Tag;
  'blue bold': Tag;
  black: Tag;
  removable: Tag;
  credits: Tag;
  specialNew: Tag;
}
