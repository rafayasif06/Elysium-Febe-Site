// src/components/Brands/SingleBrand.tsx
import React from 'react';
import Image from 'next/image';
import { Brand } from '@/sanity/brand';

interface SingleBrandProps {
  brand: Brand;
}

const SingleBrand: React.FC<SingleBrandProps> = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100"
      >
        <Image
          src={image} // Use the dark theme image directly
          alt={`${name} Brand Logo`}
          fill
          className="object-contain"
        />
      </a>
    </div>
  );
};

export default SingleBrand;
