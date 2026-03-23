import { Outlet } from 'react-router';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { DashboardHeader, DashboarSidebar } from '@/features/dashboard';

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <DashboarSidebar />
      <SidebarInset>
        <DashboardHeader />
        <ScrollArea>
          <main className='flex-1 p-4 lg:p-6'>
            <Outlet />
          </main>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
