import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon, type TIconName } from '@/components/ui/Icon';

const STAT_ITEMS: { label: string; value: string; iconName: TIconName; iconColorClass: string }[] =
  [
    { label: 'Suppliers', value: '6,987', iconName: 'suppliers', iconColorClass: 'text-info' },
    { label: 'Customers', value: '4,896', iconName: 'users', iconColorClass: 'text-orange' },
    { label: 'Orders', value: '487', iconName: 'shoppingCart', iconColorClass: 'text-teal' },
  ];

const RADIAL_MAX = 6000;

const RADIAL_DATA = [
  { name: 'Return', value: 3500, fill: 'var(--teal)' },
  { name: 'First Time', value: 5500, fill: 'var(--orange)' },
];

const CUSTOMER_STATS = [
  { label: 'First Time', value: '5.5K', trend: '+25%', colorVar: 'var(--orange)' },
  { label: 'Return', value: '3.5K', trend: '+21%', colorVar: 'var(--teal)' },
];

function StatCard({ label, value, iconName, iconColorClass }: (typeof STAT_ITEMS)[number]) {
  return (
    <div className='flex flex-col items-center justify-center gap-2 rounded-xl border border-secondary-transparent bg-light p-4'>
      <div className={iconColorClass}>
        <Icon name={iconName} size={24} />
      </div>
      <span className='text-body-lg text-muted-foreground'>{label}</span>
      <span className='text-heading-5 font-bold'>{value}</span>
    </div>
  );
}

function CustomerStatRow({ label, value, trend, colorVar }: (typeof CUSTOMER_STATS)[number]) {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-heading-5 font-bold'>{value}</p>
        <p className='text-body-sm font-medium' style={{ color: colorVar }}>
          {label}
        </p>
      </div>
      <span className='flex items-center gap-1 rounded-md bg-success-100 px-2 py-1 text-body-xs font-semibold text-success'>
        <Icon name='arrowUp' size={10} strokeWidth={3} />
        {trend}
      </span>
    </div>
  );
}

export function OverallInfo() {
  return (
    <Card className='col-span-2 border-none'>
      <CardHeader className='flex flex-row items-center gap-2'>
        <div className='rounded-xl bg-info-100 p-2 text-info'>
          <Icon name='info' strokeWidth={2} size={12} />
        </div>
        <CardTitle className='text-heading-4 font-bold'>Overall Information</CardTitle>
      </CardHeader>

      <CardContent className='space-y-6'>
        {/* Stat cards */}
        <div className='grid grid-cols-3 gap-3'>
          {STAT_ITEMS.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>

        {/* Customers overview */}
        <div className='space-y-4 border-t pt-5'>
          <div className='flex items-center justify-between'>
            <h3 className='text-heading-6 font-bold'>Customers Overview</h3>
            <Button variant='outline' size='sm' className='gap-1.5'>
              <Icon name='calendar' size={14} /> Today
            </Button>
          </div>

          <div className='flex items-center gap-4'>
            {/* Radial chart */}
            <div className='h-40 w-40 shrink-0'>
              <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart
                  innerRadius='35%'
                  outerRadius='100%'
                  data={RADIAL_DATA}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis
                    type='number'
                    domain={[0, RADIAL_MAX]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar
                    dataKey='value'
                    cornerRadius={6}
                    background={{ fill: 'var(--muted)' }}
                    angleAxisId={0}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className='flex flex-1 flex-col gap-4'>
              {CUSTOMER_STATS.map((stat) => (
                <CustomerStatRow key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
