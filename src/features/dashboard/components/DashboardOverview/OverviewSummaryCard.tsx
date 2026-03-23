import { Badge } from '@/components/ui/badge';
import type { TIconName } from '@/components/ui/Icon';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils';

type TrendType = 'up' | 'down' | 'neutral';

interface OverviewSummaryCardProps {
  title: string;
  value: string | number;

  icon: TIconName;

  trend?: {
    value: string | number;
    type?: TrendType;
  };

  className?: string;

  variant?: 'primary' | 'secondary' | 'teal' | 'info' | 'default';
}

// ---- variant styles ----
const variantStyles = {
  primary: {
    container: 'bg-primary text-primary-foreground',
    iconWrapper: 'bg-light text-primary',
  },
  secondary: {
    container: 'bg-secondary text-secondary-foreground',
    iconWrapper: 'bg-light text-secondary',
  },
  teal: {
    container: 'bg-teal text-primary-foreground',
    iconWrapper: 'bg-light text-teal',
  },
  info: {
    container: 'bg-info text-primary-foreground',
    iconWrapper: 'bg-light text-info',
  },
  default: {
    container: 'bg-muted text-primary-foreground',
    iconWrapper: 'bg-background text-foreground',
  },
};

// ---- trend styles ----
const trendStyles: Record<TrendType, string> = {
  up: 'text-success bg-success-100',
  down: 'text-danger bg-danger-100',
  neutral: 'text-muted-foreground bg-muted',
};

const trendIcons: Record<TrendType, TIconName> = {
  up: 'arrowUp',
  down: 'arrowDown',
  neutral: 'minus',
};

// ---- component ----
export const OverviewSummaryCard = ({
  title,
  value,
  icon,
  trend,
  variant = 'default',
  className,
}: OverviewSummaryCardProps) => {
  const styles = variantStyles[variant];
  const trendType = trend?.type ?? 'up';

  return (
    <div
      className={cn(
        'flex gap-3 rounded-xl p-5 transition-all hover:shadow-sm',
        styles.container,
        className,
      )}
    >
      {/* Icon */}
      <div className={cn('flex items-center justify-center rounded-xl p-3', styles.iconWrapper)}>
        <Icon name={icon} />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col justify-between'>
        <h3 className='text-body-lg'>{title}</h3>

        <div className='flex items-center justify-between gap-2'>
          <p className='text-heading-4 font-bold'>{value}</p>

          {trend && (
            <Badge className={cn('flex items-center gap-1 rounded-sm', trendStyles[trendType])}>
              <Icon name={trendIcons[trendType]} strokeWidth={3} />
              {trend.value}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};
