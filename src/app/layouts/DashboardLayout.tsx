import { Outlet } from 'react-router';
import { DashboardHeader } from '@/features/dashboard';

export function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
    </div>
  );
}
