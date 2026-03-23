import ErrorIllustration from '@/assets/images/error.svg';
import { Button } from '@/components/ui/button';
import { Icon } from '../ui/Icon';
import Image from '../ui/image';

export function ErrorFallback() {
  return (
    <div
      role='alert'
      className='flex min-h-screen w-full items-center justify-center bg-background px-4'
    >
      <div className='flex flex-col items-center text-center max-w-md space-y-6'>
        {/* Illustration */}
        <Image
          src={ErrorIllustration}
          alt='Something went wrong'
          className='w-full lg:w-auto max-w-120 h-auto'
        />

        {/* Text Content */}
        <div className='space-y-2 mt-4'>
          <h2 className='text-2xl font-bold text-gray-900'>Oops, something went wrong</h2>
          <p className='text-sm text-muted-foreground'>
            Server Error 500. We apologise and are fixing the problem Please try again at a later
            stage
          </p>
        </div>

        {/* Actions */}
        <div className='flex items-center gap-3'>
          <Button onClick={() => window.location.reload()} className='flex items-center gap-2'>
            <Icon name='refresh' className='w-4 h-4' />
            Refresh
          </Button>

          <Button variant='ghost' onClick={() => window.location.assign('/')}>
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
