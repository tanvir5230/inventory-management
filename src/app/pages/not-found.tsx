import type React from 'react';
import { useNavigate } from 'react-router';
import { paths } from '@/app/Router/paths';
import NotFoundIllustration from '@/assets/images/404.svg';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import { cn } from '@/utils';

interface NotFoundPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const NotFoundPage = ({ className, ...rest }: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={cn('flex h-screen w-full items-center justify-center px-6 py-12', className)}
      {...rest}
    >
      <div className='flex w-full max-w-lg flex-col items-center gap-8 text-center'>
        <Image
          src={NotFoundIllustration}
          alt='Page not found'
          className='h-auto w-full max-w-sm sm:max-w-md'
        />

        <div className='space-y-3'>
          <h2 className='text-2xl font-bold sm:text-3xl'>Page not found</h2>
          <p className='text-sm text-muted-foreground sm:text-base'>
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Button onClick={() => navigate(-1)} variant='outline'>
            Go Back
          </Button>

          <Button onClick={() => navigate(paths.home.getHref(), { replace: true })}>Go Home</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
