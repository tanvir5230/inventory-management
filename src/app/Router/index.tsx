import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
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
  },
  {
    path: paths.app.dashboard.path,
    Component: DashboardLayout,
    children: [{ index: true, Component: DashboardPage }],
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
