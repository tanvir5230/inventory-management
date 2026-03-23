import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/Icon';

const UserAvatar = () => {
  const user = {
    name: 'Shadcn',
    email: 'shadcn@example.com',
    image: 'https://github.com/shadcn.png',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='p-0 h-auto rounded-full focus-visible:ring-0'>
          <Avatar className='cursor-pointer'>
            <AvatarImage src={user.image} alt={user.name} className='grayscale rounded-lg' />
            <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end' className='w-56 p-2'>
        {/* User Info */}
        <div className='px-2 py-1.5'>
          <p className='text-sm font-medium text-foreground'>{user.name}</p>
          <p className='text-xs text-muted-foreground truncate'>{user.email}</p>
        </div>

        <DropdownMenuSeparator />

        {/* Actions */}
        <DropdownMenuItem className='flex items-center gap-2 cursor-pointer'>
          <Icon name='user' className='w-4 h-4' />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem className='flex items-center gap-2 cursor-pointer'>
          <Icon name='settings' className='w-4 h-4' />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className='flex items-center gap-2 text-destructive cursor-pointer'>
          <Icon name='logOut' className='w-4 h-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
