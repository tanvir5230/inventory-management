import { CircleQuestionMark, Home, Menu } from 'lucide-react';
import { CustomCircleIcon } from './custom-icons/circle';
import type { TIcon, TIconName } from './icon.types';

export const IconMap: Record<TIconName, TIcon> = {
  home: Home,
  menu: Menu,
  circle: CustomCircleIcon,
  default: CircleQuestionMark,
};
