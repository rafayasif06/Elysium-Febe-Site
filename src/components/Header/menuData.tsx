// src/components/Header/menuData.tsx

import { MenuItem } from '@/sanity/menu';

const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'home',
    path: '/',
    newTab: false,
  },
  {
    id: 2,
    title: 'about us',
    path: '/about',
    newTab: false,
  },
  {
    id: 3,
    title: 'Actualidad',
    path: '/blog',
    newTab: false,
  },
  {
    id: 4,
    title: 'Contacto',
    path: '/contact',
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: 'Blog-sidebar',
  //   path: '/blog-sidebar',
  //   newTab: false,
  // },
];

export default menuData;
