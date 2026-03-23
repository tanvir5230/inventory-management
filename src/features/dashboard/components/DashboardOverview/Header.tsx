import { addDays, format } from 'date-fns';
import { useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field } from '@/components/ui/field';
import { Icon } from '@/components/ui/Icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const createDefaultRange = (): DateRange => {
  const baseDate = new Date(new Date().getFullYear(), 0, 20);
  return {
    from: baseDate,
    to: addDays(baseDate, 20),
  };
};

const formatDateRange = (range?: DateRange) => {
  if (!range?.from) return 'Pick a date';

  if (!range.to) {
    return format(range.from, 'LLL dd, y');
  }

  return `${format(range.from, 'LLL dd, y')} - ${format(range.to, 'LLL dd, y')}`;
};

interface DashboardOverviewHeaderProps {
  userName: string;
  numOfOrders: string;

  // controlled date
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
}

export const DashboardOverviewHeader = ({
  userName,
  numOfOrders,
  value,
  onChange,
}: DashboardOverviewHeaderProps) => {
  const [internalDate, setInternalDate] = useState<DateRange | undefined>(createDefaultRange);

  const date = value ?? internalDate;

  const handleChange = (range: DateRange | undefined) => {
    onChange?.(range);
    if (!value) setInternalDate(range);
  };

  const formattedDate = useMemo(() => formatDateRange(date), [date]);

  return (
    <header className='flex items-center justify-between gap-4 flex-wrap'>
      {/* Left: Title */}
      <div>
        <h1 className='text-grey-900 text-heading-1 font-bold'>Welcome, {userName}</h1>

        <p className='text-body-lg text-grey-600'>
          You have <span className='text-primary font-medium'>{numOfOrders}</span> Orders, Today
        </p>
      </div>

      {/* Right: Date Picker */}
      <Field className='w-64'>
        <Popover>
          <PopoverTrigger asChild>
            <Button id='date-range' variant='outline' className='justify-start px-3 font-normal'>
              <Icon name='calendar' className='mr-2' />
              <span className={!date?.from ? 'text-muted-foreground' : ''}>{formattedDate}</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent align='end' className='w-auto p-0'>
            <Calendar
              mode='range'
              selected={date}
              onSelect={handleChange}
              defaultMonth={date?.from}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </Field>
    </header>
  );
};
