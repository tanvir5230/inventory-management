import { Loading } from '@/components/feedback/Loading';
import { useGetDashboardOverview } from '../../hooks';

const DashboardOverview = () => {
  const { data, isLoading, error } = useGetDashboardOverview();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <p>An error occured!</p>;
  }

  return <div>{data?.metadata.user}</div>;
};

export default DashboardOverview;
