import { cilPuzzle, cilSpeedometer } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
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
  {
    component: CNavGroup,
    name: 'Store Management',
    to: '/dashboard/stores',
    role: ['admin'], // we added this property to filter(done in AppSidebarNav component) out which nav section to show
    // if the user is an normal user we wont show them admin dashboard a single person may be in multiple role.. so , we wrote role in an array
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Store List',
        to: '/dashboard/users',
      },
    ],
  },
  // For Merchant
  {
    component: CNavGroup,
    name: 'Product Management',
    to: '/dashboard/products',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    role: ['merchant'],

    items: [
      {
        component: CNavItem,
        name: 'Product List',
        to: '/dashboard/products',
      },
    ],
  },
];

export default _nav;
