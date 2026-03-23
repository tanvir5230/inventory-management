import { paths } from '@/app/Router/paths';
import { Alert, AlertAction, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/Icon';
import { Link } from '@/components/ui/link';

interface DashboardOverviewAlertProps {
  onClose?: () => void;
}

const DashboardOverviewAlert = ({ onClose }: DashboardOverviewAlertProps) => {
  return (
    <Alert variant='destructive' className='bg-orange-transparent text-body-lg text-orange py-3'>
      <Icon name='warning' />
      <AlertTitle className='text-grey-600'>
        Your Product <span className='text-orange'>Apple Iphone 15 is running Low</span>, already
        below 5 Pcs.,{' '}
        <Link to={paths.app.stock.adjustment.path} className='text-orange'>
          Add Stock
        </Link>
      </AlertTitle>
      <AlertAction className='top-1/2 -translate-y-1/2 right-1'>
        <Button variant='ghost' onClick={onClose}>
          <Icon name='close' />
        </Button>
      </AlertAction>
    </Alert>
  );
};

export default DashboardOverviewAlert;
