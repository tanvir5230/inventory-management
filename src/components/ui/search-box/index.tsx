import * as React from 'react';
import { useDebounce } from '@/hooks';
import { cn } from '@/utils';
import { Icon } from '../Icon';
import { Input } from '../input';

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
        'p-1 pl-2 rounded-md border bg-background',
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

      <span
        className={cn(
          'text-sm text-secondary bg-border',
          'px-1.5 py-1 rounded border',
          'hidden sm:inline-flex items-center gap-1',
        )}
      >
        <Icon name='command' size={14} /> K
      </span>
    </div>
  );
};

export default SearchBox;
