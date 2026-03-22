import type { IconProps } from '../icon.types';

export function CustomCircleIcon({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
}: IconProps) {
  return (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' width={size} height={size}>
      <title>Circle icon</title>
      <circle cx='12' cy='12' r='8' stroke={color} fill={fill} strokeWidth={strokeWidth} />
    </svg>
  );
}
