import { Outlet } from 'react-router';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { DashboardHeader, DashboarSidebar } from '@/features/dashboard';

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboarSidebar />
      <SidebarInset>
        <DashboardHeader />
        <main className='flex-1 p-6'>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
