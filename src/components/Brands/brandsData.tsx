// src/components/Brands/brandsData.tsx
import { Brand } from '@/sanity/brand';

const brandsData: Brand[] = [
  {
    id: 6,
    name: 'Formbold',
    href: 'https://formbold.com',
    image: '/images/brands/formbold.svg', // Use dark theme version
  },
  {
    id: 1,
    name: 'UIdeck',
    href: 'https://uideck.com',
    image: '/images/brands/uideck.svg', // Use dark theme version
  },
  {
    id: 2,
    name: 'Tailgrids',
    href: 'https://tailgrids.com',
    image: '/images/brands/tailgrids.svg', // Use dark theme version
  },
  {
    id: 3,
    name: 'Lineicons',
    href: 'https://lineicons.com',
    image: '/images/brands/lineicons.svg', // Use dark theme version
  },
  {
    id: 4,
    name: 'Tailadmin',
    href: 'https://tailadmin.com',
    image: '/images/brands/tailadmin.svg', // Use dark theme version
  },
  {
    id: 5,
    name: 'PlainAdmin',
    href: 'https://plainadmin.com',
    image: '/images/brands/plainadmin.svg', // Use dark theme version
  },
];

export default brandsData;
