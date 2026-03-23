import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

export interface IconProps extends LucideProps {
  name: TIconName;
}

export type TIcon = ComponentType<IconProps>;

export const IconName = {
  // ===== Navigation =====
  home: 'home',
  menu: 'menu',
  moreHorizontal: 'moreHorizontal',
  moreVertical: 'moreVertical',
  arrowLeft: 'arrowLeft',
  arrowRight: 'arrowRight',
  arrowUp: 'arrowUp',
  arrowDown: 'arrowDown',
  chevronDown: 'chevronDown',
  chevronUp: 'chevronUp',
  chevronRight: 'chevronRight',
  chevronLeft: 'chevronLeft',

  // ===== Actions =====
  search: 'search',
  close: 'close',
  plus: 'plus',
  circlePlus: 'circlePlus',
  minus: 'minus',
  check: 'check',
  edit: 'edit',
  trash: 'trash',
  download: 'download',
  upload: 'upload',
  refresh: 'refresh',
  command: 'command',
  maximize: 'maximize',

  // ===== UI / Status =====
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  loader: 'loader',

  // ===== Media =====
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  volume: 'volume',

  // ===== User =====
  user: 'user',
  users: 'users',
  settings: 'settings',
  logOut: 'logOut',

  // ===== Files =====
  file: 'file',
  folder: 'folder',
  fileText: 'fileText',

  // ===== Misc =====
  calendar: 'calendar',
  clock: 'clock',
  bell: 'bell',
  star: 'star',
  heart: 'heart',
  laptop: 'laptop',

  // ===== Custom =====
  circle: 'circle',

  // ===== Fallback =====
  default: 'default',
} as const;

export type TIconName = keyof typeof IconName;
