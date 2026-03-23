import { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils';

const CHART_DATA = [
  { month: 'Jan', purchase: 50, sales: 15 },
  { month: 'Feb', purchase: 35, sales: 25 },
  { month: 'Mar', purchase: 25, sales: 12 },
  { month: 'Apr', purchase: 50, sales: 15 },
  { month: 'May', purchase: 40, sales: 28 },
  { month: 'Jun', purchase: 50, sales: 15 },
  { month: 'Jul', purchase: 25, sales: 12 },
  { month: 'Aug', purchase: 32, sales: 18 },
  { month: 'Sep', purchase: 48, sales: 40 },
  { month: 'Oct', purchase: 35, sales: 8 },
  { month: 'Nov', purchase: 42, sales: 30 },
  { month: 'Dec', purchase: 32, sales: 15 },
];

const TIMELINES = ['1D', '1W', '1M', '3M', '6M', '1Y'] as const;

type Timeline = (typeof TIMELINES)[number];

const COLOR_PURCHASE = 'var(--primary-200)';
const COLOR_SALES = 'var(--primary)';
const COLOR_AXIS_TICK = 'var(--muted-foreground)';

interface SummaryBadgeProps {
  label: string;
  value: string;
  dotClass: string;
}

function SummaryBadge({ label, value, dotClass }: SummaryBadgeProps) {
  return (
    <div className='flex flex-col gap-1 rounded-xl border px-4 py-3'>
      <div className='flex items-center gap-2 text-body-sm text-muted-foreground'>
        <span className={cn('h-2 w-2 shrink-0 rounded-full', dotClass)} />
        {label}
      </div>
      <span className='text-heading-4 font-bold text-grey-900'>{value}</span>
    </div>
  );
}

export function SalesPurchaseChart() {
  const [selectedTimeline, setSelectedTimeline] = useState<Timeline>('1Y');

  return (
    <Card className='col-span-4 border-none'>
      <CardHeader className='flex flex-row flex-wrap items-center justify-between gap-3'>
        <div className='flex items-center gap-2'>
          <div className='rounded-lg bg-orange-transparent p-2 text-primary'>
            <Icon name='shoppingCart' size={14} />
          </div>
          <CardTitle className='text-heading-4 font-bold'>Sales & Purchase</CardTitle>
        </div>

        {/* Timeline selector */}
        <div className='flex overflow-hidden rounded-md bg-light'>
          {TIMELINES.map((t, i) => (
            <Button
              key={t}
              variant='ghost'
              size='sm'
              onClick={() => setSelectedTimeline(t)}
              className={cn(
                'rounded-none text-secondary transition-colors',
                i < TIMELINES.length - 1 && 'border-r border-r-secondary-transparent',
                t === selectedTimeline
                  ? 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                  : 'hover:bg-primary-100 hover:text-secondary',
              )}
            >
              {t}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent className='space-y-6'>
        {/* Summary */}
        <div className='flex flex-wrap gap-3'>
          <SummaryBadge label='Total Purchase' value='49K' dotClass='bg-primary-200' />
          <SummaryBadge label='Total Sales' value='38K' dotClass='bg-primary' />
        </div>

        <div className='h-72 w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={CHART_DATA} barCategoryGap='40%'>
              <XAxis
                dataKey='month'
                axisLine={false}
                tickLine={false}
                tick={{ fill: COLOR_AXIS_TICK, fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: COLOR_AXIS_TICK, fontSize: 12 }}
                tickFormatter={(v: number) => `${v}K`}
                width={36}
              />
              <Tooltip
                cursor={{ fill: 'var(--muted)', opacity: 1, radius: 8 }}
                contentStyle={{
                  borderRadius: 8,
                  border: '1px solid var(--border)',
                  fontSize: 12,
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--card)',
                }}
              />
              {/* stackId groups bars into one stack per category */}
              <Bar
                dataKey='purchase'
                name='Purchase'
                stackId='a'
                fill={COLOR_PURCHASE}
                radius={8}
                barSize={40}
              />
              <Bar
                dataKey='sales'
                name='Sales'
                stackId='a'
                fill={COLOR_SALES}
                radius={8}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
