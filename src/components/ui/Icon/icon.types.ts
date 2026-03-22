import type { LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

export interface IconProps extends LucideProps {
  name: TIconName;
}

export type TIcon = ComponentType<IconProps>;

export const IconName = {
  home: 'home',
  menu: 'menu',
  circle: 'circle',
  default: 'default',
} as const;

export type TIconName = keyof typeof IconName;
