import * as React from 'react';
import { cn } from '@/utils';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, alt = '', ...props }, ref) => {
    return (
      <img ref={ref} alt={alt} className={cn('w-full h-auto object-cover', className)} {...props} />
    );
  },
);

Image.displayName = 'Image';

export default Image;
