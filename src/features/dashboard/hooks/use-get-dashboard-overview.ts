import { QUERY_KEYS } from '@/constants';
import { useApiQuery } from '@/hooks';
import { dashboardApiService } from '../services/dashboard-api.service';

export function useGetDashboardOverview() {
  return useApiQuery({
    queryKey: [QUERY_KEYS.DASHBOARD_OVERVIEW],
    queryFn: () => dashboardApiService.getDashboardOverviewData(),
  });
}
