import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Inicio',
    path: '/dashboard/app',
    icon: getIcon('bi-house-fill')
  },
  {
    title: 'Mis Hijos',
    path: '/dashboard/mychild',
    icon: getIcon('bi-person-square')
  },
  {
    title: 'Calendario Vacunacion',
    path: '/dashboard/vaccine',
    icon: getIcon('mdi:needle')
  }
];

export default sidebarConfig;
