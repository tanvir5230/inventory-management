import ErrorIllustration from '@/assets/images/error.svg';
import { Button } from '@/components/ui/button';
import { Icon } from '../ui/Icon';
import Image from '../ui/image';

export function ErrorFallback() {
  return (
    <div
      role='alert'
      className='flex min-h-screen w-full items-center justify-center bg-background px-6 py-12'
    >
      <div className='flex w-full max-w-lg flex-col items-center gap-8 text-center'>
        <Image
          src={ErrorIllustration}
          alt='Something went wrong'
          className='h-auto w-full max-w-sm sm:max-w-md'
        />

        <div className='space-y-3'>
          <h2 className='text-2xl font-bold sm:text-3xl'>Oops, something went wrong</h2>
          <p className='text-sm text-muted-foreground sm:text-base'>
            Server Error 500. We apologise and are fixing the problem.
            <br className='hidden sm:block' /> Please try again at a later stage.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-3'>
          <Button onClick={() => window.location.reload()} className='flex items-center gap-2'>
            <Icon name='refresh' className='h-4 w-4' />
            Try again
          </Button>

          <Button variant='outline' onClick={() => window.location.assign('/')}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
