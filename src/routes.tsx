import { createBrowserRouter } from 'react-router-dom';
import { Timeline } from './pages/timeline';
import { Status } from './pages/status';
import { MainLayout } from './layout/main-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },
      {
        path: '/status/:tweetId',
        element: <Status />,
      },
    ],
  },
]);
