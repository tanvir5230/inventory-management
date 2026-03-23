import type { HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';
import SearchBox from '@/components/ui/search-box';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/utils';
import LanguageSelection from './LanguageSelection';
import { StoreSelection } from './StoreSelection';
import UserAvatar from './UserAvatar';

interface DashboardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export function DashboardHeader({ className, ...rest }: DashboardHeaderProps) {
  return (
    <div
      {...rest}
      className={cn(
        'h-16.25 w-full border-b flex items-center justify-between gap-2 px-3 lg:px-6 py-2 lg:py-3',
        className,
      )}
    >
      <div className='flex items-center gap-2'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='h-6' />
        <SearchBox />
      </div>
      <div className='flex-1 flex items-center justify-end gap-2 h-full'>
        <StoreSelection />

        <Button className='h-full'>
          <Icon name='circlePlus' /> Add New
        </Button>

        <Button className='h-full' variant='secondary'>
          <Icon name='laptop' />
          POS
        </Button>

        <Separator orientation='vertical' className='mx-1' />

        <LanguageSelection />

        <Button className='px-2 text-lg leading-none w-10 h-10 bg-light text-muted-foreground'>
          <Icon name='maximize' />
        </Button>

        <Button className='px-2 text-lg leading-none w-10 h-10 bg-light text-muted-foreground'>
          <Icon name='bell' />
        </Button>

        <Button className='px-2 text-lg leading-none w-10 h-10 bg-light text-muted-foreground'>
          <Icon name='settings' />
        </Button>

        <UserAvatar />
      </div>
    </div>
  );
}
