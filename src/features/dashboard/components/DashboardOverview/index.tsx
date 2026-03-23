import { useState } from 'react';
import { paths } from '@/app/Router/paths';
import { Loading } from '@/components/feedback/Loading';
import { useGetDashboardOverview } from '../../hooks';
import DashboardOverviewAlert from './Alert';
import FinancialSummaryCard from './FinancialSummaryCard';
import { DashboardOverviewHeader } from './Header';
import { OverallInfo } from './OverallInfo';
import { OverviewSummaryCard } from './OverviewSummaryCard';
import { SalesPurchaseChart } from './SalesPurchaseChart';

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

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        <FinancialSummaryCard
          amount='$8,458,798'
          amountTitle='Profit'
          icon='layers'
          iconWrapperClassName='bg-cyan-transparent text-cyan'
          trend={{ value: '+35%', direction: 'up' }}
          viewAllHref={paths.app.finance.income.getHref()}
        />

        <FinancialSummaryCard
          amount='$48,988,78'
          amountTitle='Invoice Due'
          icon='chartPie'
          iconWrapperClassName='bg-teal-transparent text-teal'
          trend={{ value: '-19%', direction: 'down' }}
          viewAllHref={paths.app.sales.invoices.getHref()}
        />

        <FinancialSummaryCard
          amount='$8,980,097'
          amountTitle='Total Expenses'
          icon='creditCard'
          iconWrapperClassName='bg-orange-transparent text-orange'
          trend={{ value: '+41%', direction: 'up' }}
          viewAllHref={paths.app.finance.expenses.getHref()}
        />

        <FinancialSummaryCard
          amount='$78,458,798'
          amountTitle='Total Payment Returns'
          icon='purchaseReturn'
          iconWrapperClassName='bg-indigo-transparent text-indigo'
          trend={{ value: '-20%', direction: 'down' }}
          viewAllHref={paths.app.purchases.purchaseReturn.getHref()}
        />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-6 gap-6'>
        <SalesPurchaseChart />
        <OverallInfo />
      </div>
    </div>
  );
};

export default DashboardOverview;
