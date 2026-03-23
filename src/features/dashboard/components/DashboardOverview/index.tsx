import { useState } from 'react';
import { Loading } from '@/components/feedback/Loading';
import { useGetDashboardOverview } from '../../hooks';
import DashboardOverviewAlert from './Alert';
import { DashboardOverviewHeader } from './Header';

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
    </div>
  );
};

export default DashboardOverview;
