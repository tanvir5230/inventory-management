import * as React from 'react';
import { useDebounce } from '@/hooks';
import { cn } from '@/utils';
import { Icon } from '../Icon';
import { Input } from '../input';
import { Kbd } from '../kbd';

interface SearchBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch?: (value: string) => void;
  delay?: number;
}

const SearchBox = ({ className, onSearch, delay = 300, ...rest }: SearchBoxProps) => {
  const [value, setValue] = React.useState<string>('');

  const debouncedValue = useDebounce(value, delay);

  React.useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div
      {...rest}
      className={cn(
        'flex items-center gap-2 max-w-xs w-full',
        'p-1 pl-2 rounded-md border bg-background h-10',
        'focus-within:ring-2 focus-within:ring-ring',
        className,
      )}
    >
      <Icon name='search' className='w-4 h-4 text-muted-foreground shrink-0' />

      <Input
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='border-none shadow-none focus-visible:ring-0 p-0 h-auto'
      />

      <span className='flex items-center gap-0.5'>
        <Kbd className={cn('text-sm text-secondary', 'border', 'hidden sm:inline')}>⌘</Kbd>
        <Kbd className={cn('text-sm text-secondary', 'border', 'hidden sm:inline')}>K</Kbd>
      </span>
    </div>
  );
};

export default SearchBox;
