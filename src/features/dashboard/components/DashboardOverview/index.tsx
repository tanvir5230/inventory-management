import { useState } from 'react';
import { Loading } from '@/components/feedback/Loading';
import { useGetDashboardOverview } from '../../hooks';
import DashboardOverviewAlert from './Alert';
import { DashboardOverviewHeader } from './Header';
import { OverviewSummaryCard } from './OverviewSummaryCard';

const DashboardOverview = () => {
  const [showLowStockAlert, setShowLowStockAlert] = useState<boolean>(true);
  const { data, isLoading, error } = useGetDashboardOverview();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <p>An error occured!</p>;
  }

  function handleCloseLowStockAlert() {
    setShowLowStockAlert(false);
  }

  return (
    <div className='space-y-6'>
      <DashboardOverviewHeader userName={data?.metadata.user ?? ''} numOfOrders={'200+'} />
      {showLowStockAlert && <DashboardOverviewAlert onClose={handleCloseLowStockAlert} />}
      <div className='flex flex-wrap gap-2'>
        {/* The specific info you provided */}
        <OverviewSummaryCard
          title='Total Sales'
          value='$48,988,078'
          icon='fileText'
          trend={{ value: '22%', type: 'up' }}
          variant='primary'
          className='flex-1'
        />

        <OverviewSummaryCard
          title='Total Sales Return'
          value='$42,850,000'
          icon='refresh'
          trend={{ value: '-12%', type: 'down' }}
          variant='secondary'
          className='flex-1'
        />

        <OverviewSummaryCard
          title='Total Purchase'
          value='$24,391,253'
          icon='shoppingCart'
          trend={{ value: '8%', type: 'up' }}
          variant='teal'
          className='flex-1'
        />

        <OverviewSummaryCard
          title='Total Purchase Return'
          value='$18,458,747'
          icon='bankAccount'
          trend={{ value: '5%', type: 'down' }}
          variant='info'
          className='flex-1'
        />
      </div>
    </div>
  );
};

export default DashboardOverview;
