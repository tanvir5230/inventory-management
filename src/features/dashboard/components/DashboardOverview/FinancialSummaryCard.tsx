import type React from 'react';
import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Icon, type TIconName } from '@/components/ui/Icon';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/utils';

type TrendDirection = 'up' | 'down' | 'neutral';

interface FinancialSummaryCardProps extends React.ComponentProps<'div'> {
  amount: string;
  amountTitle: string;
  iconWrapperClassName: string;
  icon: TIconName;
  trend: {
    value: string;
    direction: TrendDirection;
  };
  viewAllHref?: string;
}

const trendStyles: Record<TrendDirection, string> = {
  up: 'text-success',
  down: 'text-danger',
  neutral: 'text-muted-foreground',
};

const trendIcons: Record<TrendDirection, TIconName> = {
  up: 'arrowUp',
  down: 'arrowDown',
  neutral: 'minus',
};

const FinancialSummaryCard = ({
  amount,
  amountTitle,
  iconWrapperClassName,
  icon,
  trend,
  viewAllHref,
  className,
  ...rest
}: FinancialSummaryCardProps) => {
  return (
    <Card className={className} {...rest}>
      <CardContent>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-1'>
            <h4 className='text-heading-4 font-bold text-grey-900'>{amount}</h4>
            <p className='text-body-lg text-muted-foreground'>{amountTitle}</p>
          </div>
          <div className={cn('rounded-xl p-4', iconWrapperClassName)}>
            <Icon name={icon} />
          </div>
        </div>

        <Separator className='my-4' />

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1.5'>
            <span
              className={cn(
                'flex items-center gap-0.5 text-body-sm font-bold',
                trendStyles[trend.direction],
              )}
            >
              <Icon name={trendIcons[trend.direction]} size={14} strokeWidth={3} />
              {trend.value}
            </span>
            <span className='text-body-sm text-muted-foreground'>vs Last Month</span>
          </div>

          {viewAllHref && (
            <Link to={viewAllHref} className='text-body-md font-medium underline text-grey-900'>
              View All
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialSummaryCard;
