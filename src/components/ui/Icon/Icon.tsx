import type { IconProps } from './icon.types';
import { IconMap } from './iconMap';

export function Icon({ size = 24, ...rest }: IconProps) {
  const IconComponent = IconMap[rest.name] ?? IconMap.default;
  return <IconComponent size={size} {...rest} />;
}
