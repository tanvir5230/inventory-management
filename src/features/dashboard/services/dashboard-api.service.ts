import { API_ENDPOINTS } from '@/constants';
import { apiClient } from '@/services';
import type { IDashboardOverviewResponse } from '../types';

class DashboardApiService {
  // *** get dashboard overview data ***
  getDashboardOverviewData() {
    return apiClient.get<IDashboardOverviewResponse>(API_ENDPOINTS.dashboard.overview);
  }
}

export const dashboardApiService = new DashboardApiService();
