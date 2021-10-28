import React from 'react';
import store from 'redux/store';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const MerchantDashboard = React.lazy(() =>
  import('./views/dashboard/MerchantDashboard')
);
const UserList = React.lazy(() => import('./views/userList/UserList'));
const ProductList = React.lazy(() => import('./views/productList/ProductList'));

const {
  auth: { data }, // destructured data from auth
} = store.getState();
const selectDashboard = () => {
  switch (data?.role) {
    case 'merchant':
      return MerchantDashboard;
    case 'admin':
      return Dashboard;
    default:
      return null;
  }
};

const routes = [
  // { exact: true, path: '/', name: 'Home' },
  {
    exact: true,
    path: '/dashboard',
    name: 'Dashboard',
    component: selectDashboard(),
    role: ['admin', 'merchant'],
  },
  {
    exact: true,
    path: '/dashboard/users',
    name: 'User List',
    component: UserList,
    role: ['admin'],
  },
  {
    exact: true,
    path: '/dashboard/products',
    name: 'User List',
    component: ProductList,
    role: ['merchant'],
  },
];

export default routes;
