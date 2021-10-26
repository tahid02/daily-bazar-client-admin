// eslint-disable-next-line no-use-before-define

import CIcon from '@coreui/icons-react';
import { cilPuzzle, cilSpeedometer } from '@coreui/icons';
import { CNavGroup, CNavItem } from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    role: ['admin', 'merchant'],
  },

  {
    component: CNavGroup,
    name: 'User Management',
    to: '/dashboard/users',
    role: ['admin'],
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        to: '/dashboard/users',
      },
      {
        component: CNavItem,
        name: 'Merchants',
        to: '/dashboard/merchant',
      },
    ],
  },
];

export default _nav;
