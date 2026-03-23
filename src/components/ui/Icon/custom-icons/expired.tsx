import type { IconProps } from '../icon.types';

export function CustomExpiredIcon({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
}: IconProps) {
  return (
    <svg
      viewBox='0 0 16 16'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
    >
      <title>Expiry Icon</title>
      <path
        d='M6.66603 13.8511C6.08577 13.7195 5.52848 13.5018 5.0127 13.2051M9.33268 2.14844C10.6581 2.45115 11.8415 3.1949 12.6891 4.25791C13.5367 5.32092 13.9983 6.6402 13.9983 7.99977C13.9983 9.35934 13.5367 10.6786 12.6891 11.7416C11.8415 12.8046 10.6581 13.5484 9.33268 13.8511M3.05201 11.3951C2.68835 10.8668 2.41214 10.2833 2.23401 9.66711M2.08203 6.99977C2.1887 6.36644 2.39403 5.76644 2.68203 5.21644L2.7947 5.0131M4.604 3.05244C5.22777 2.62304 5.92755 2.31625 6.666 2.14844M7.99935 5.33311V7.99978M7.99935 10.6664V10.6731'
        stroke={color}
        strokeWidth={strokeWidth}
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
