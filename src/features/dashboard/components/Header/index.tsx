import type { HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';
import SearchBox from '@/components/ui/search-box';
import { Separator } from '@/components/ui/separator';
import { useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/utils';
import LanguageSelection from './LanguageSelection';
import { StoreSelection } from './StoreSelection';
import UserAvatar from './UserAvatar';

interface DashboardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function DashboardHeader({ className, ...rest }: DashboardHeaderProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <div
      className={cn(
        'h-16.25 w-full border-b flex items-center justify-between gap-2 px-3 lg:px-6 py-2 lg:py-3',
        className,
      )}
      {...rest}
    >
      <div className='flex items-center gap-2'>
        <Button
          variant='ghost'
          size='icon-sm'
          className='md:hidden'
          onClick={toggleSidebar}
          aria-label='Open sidebar'
        >
          <Icon name='menu' />
        </Button>

        <SearchBox className='hidden sm:flex' />
      </div>

      <div className='flex flex-1 items-center justify-end gap-2 h-full'>
        <div className='hidden lg:flex'>
          <StoreSelection />
        </div>

        <Button className='hidden h-full sm:flex'>
          <Icon name='circlePlus' /> Add New
        </Button>

        <Button className='hidden h-full md:flex' variant='secondary'>
          <Icon name='laptop' />
          POS
        </Button>

        <Separator orientation='vertical' className='mx-1 hidden md:block' />

        <div className='hidden md:flex'>
          <LanguageSelection />
        </div>

        <Button className='hidden w-10 h-10 px-2 bg-light text-muted-foreground sm:flex'>
          <Icon name='maximize' />
        </Button>

        <Button className='w-10 h-10 px-2 bg-light text-muted-foreground'>
          <Icon name='bell' />
        </Button>

        <Button className='hidden w-10 h-10 px-2 bg-light text-muted-foreground sm:flex'>
          <Icon name='settings' />
        </Button>

        <UserAvatar />
      </div>
    </div>
  );
}
