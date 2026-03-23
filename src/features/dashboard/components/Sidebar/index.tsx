import { Settings } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router';
import logo from '@/assets/images/logo.png';
import { Icon } from '@/components/ui/Icon';
import Image from '@/components/ui/image';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { dashboardNavItems } from './sidebar.data';

export const DashboarSidebar = () => {
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='flex flex-row items-center justify-between px-4 py-3 border-b h-16.25'>
        <Link to='/dashboard'>
          <Image src={logo} alt='Logo' className='w-28.5 object-contain' />
        </Link>

        <SidebarTrigger className='bg-primary text-primary-foreground rounded-full p-2 translate-x-7.5 z-10' />
      </SidebarHeader>

      <SidebarContent className='px-3 py-2'>
        {dashboardNavItems.map((group, i) => (
          <React.Fragment key={group.title}>
            <SidebarGroup>
              {group.title && (
                <SidebarGroupLabel className='text-body-sm text-secondary'>
                  {group.title}
                </SidebarGroupLabel>
              )}

              <SidebarGroupContent>
                <SidebarMenu className='gap-1'>
                  {group.children.map((item) => {
                    const isActive = Boolean(item.href && pathname === item.href);

                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild={!!item.href}
                          isActive={isActive}
                          tooltip={item.title}
                          className='px-3 py-2 text-body-lg font-medium h-10'
                        >
                          {item.href ? (
                            <Link to={item.href}>
                              {item.icon && <Icon name={item.icon} />}
                              <span>{item.title}</span>
                            </Link>
                          ) : (
                            <div className='flex items-center gap-2'>
                              {item.icon && <Icon name={item.icon} />}
                              <span>{item.title}</span>
                            </div>
                          )}
                        </SidebarMenuButton>

                        {/* Nested children (optional) */}
                        {item.children && item.children.length > 0 && (
                          <SidebarMenu className='ml-4 mt-1 px-3 py-2 text-body-lg font-medium'>
                            {item.children.map((subItem) => {
                              const isSubActive = Boolean(
                                subItem.href && pathname === subItem.href,
                              );

                              return (
                                <SidebarMenuItem key={subItem.title}>
                                  <SidebarMenuButton
                                    asChild
                                    isActive={isSubActive}
                                    tooltip={subItem.title}
                                    className='active:bg-primary active:text-primary-foreground'
                                  >
                                    <Link to={subItem.href!}>
                                      {subItem.icon && <Icon name={subItem.icon} />}
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              );
                            })}
                          </SidebarMenu>
                        )}
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            {i !== dashboardNavItems.length - 1 && <SidebarSeparator className='mx-0 my-3' />}
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter className='border-t'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/settings'} tooltip='Settings'>
              <Link to='/settings'>
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};
