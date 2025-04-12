//src/components/Testimonials/SingleTestimonial.tsx

import { Testimonial } from '@/sanity/testimonial';
import Image from 'next/image';

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-white">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-sm p-8 duration-300 hover:shadow-one bg-dark shadow-three hover:shadow-gray-dark lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b pb-8 text-base leading-relaxed border-white border-opacity-10 text-white break-all whitespace-normal max-w-[400px]">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill sizes="50px" />
          </div>
          <div className="w-full">
            <h3 className="mb-1 font-semibold text-white text-base xl:text-lg">
              {name}
            </h3>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
