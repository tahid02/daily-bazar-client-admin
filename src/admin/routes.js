import React from 'react';
import UserList from './views/dashboard/userList/UserList';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// Base

const routes = [
  // { exact: true, path: '/', name: 'Home' },
  // {
  //   exact: true,
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard,
  //   role: ['admin', 'merchant'],
  // },
  // {
  //   exact: true,
  //   path: '/dashboard/users',
  //   name: 'user list',
  //   component: UserList,
  //   role: ['admin'],
  // },

  {
    exact: true,
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    role: ['admin', 'merchant'],
  },
  {
    exact: true,
    path: '/dashboard/users',
    name: 'User List',
    component: UserList,
    role: ['admin'],
  },
];

export default routes;
