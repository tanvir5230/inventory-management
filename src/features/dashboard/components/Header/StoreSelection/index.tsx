import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils';

type Store = {
  id: string;
  name: string;
  image?: string;
};

const stores: Store[] = [
  {
    id: '1',
    name: 'Freshmart',
    image: 'https://github.com/shadcn.png',
  },
  {
    id: '2',
    name: 'Freshmart 2',
  },
];

export function StoreSelection() {
  const [selectedStore, setSelectedStore] = React.useState<Store>(stores[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center gap-2 px-2 h-10'>
          <Avatar className='h-6 w-6'>
            <AvatarImage src={selectedStore.image} alt={selectedStore.name} className='grayscale' />
            <AvatarFallback>{selectedStore.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>

          <span className='truncate max-w-30'>{selectedStore.name}</span>

          <Icon name='chevronDown' className='ml-auto w-4 h-4 text-muted-foreground' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-48'>
        {stores.map((store) => {
          const isActive = store.id === selectedStore.id;

          return (
            <DropdownMenuItem
              key={store.id}
              onClick={() => setSelectedStore(store)}
              className={cn('flex items-center gap-2 cursor-pointer', isActive && 'bg-accent')}
            >
              <Avatar className='h-6 w-6'>
                <AvatarImage src={store.image} alt={store.name} />
                <AvatarFallback>{store.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>

              <span className='flex-1'>{store.name}</span>

              {isActive && <Icon name='check' className='w-4 h-4 text-primary' />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
