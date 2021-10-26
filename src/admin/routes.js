import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Base

const routes = [
  { path: '/', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;
