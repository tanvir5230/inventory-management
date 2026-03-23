import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ErrorFallback } from '@/components/feedback/Error';
import { DashboardLayout, RootLayout } from '../layouts';
import { paths } from './paths';

const LandingPage = lazy(() => import('../pages/landing'));
const DashboardPage = lazy(() => import('../pages/landing'));
const NotFoundPage = lazy(() => import('../pages/not-found'));

const router = createBrowserRouter([
  {
    path: paths.home.path,
    Component: RootLayout,
    children: [{ index: true, Component: LandingPage }],
    ErrorBoundary: ErrorFallback,
  },
  {
    path: paths.app.dashboard.path,
    Component: DashboardLayout,
    children: [{ index: true, Component: DashboardPage }],
    ErrorBoundary: ErrorFallback,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
