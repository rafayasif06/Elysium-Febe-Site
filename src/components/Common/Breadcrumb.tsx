//src/components/Common/Breadcrumb.tsx
'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
const Breadcrumb = ({
  pageName,
}: {
  pageName: string;
  description: string;
}) => {
  const { t } = useTranslation();
  return (
    <>
      <section className="lg:pt-[150px] overflow-hidden pt-28 relative z-10">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-7/12 md:w-8/12 px-4">
              <div className="lg:mb-12 max-w-[570px] mb-8 md:mb-0">
                <h1 className="text-2xl text-white font-bold mb-5 sm:text-3xl">
                  {t('title')}
                </h1>
                <p className="text-base text-body-color-dark font-medium leading-relaxed">
                  {t('description')}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 md:w-4/12 px-4">
              <div className="text-end">
                <ul className="flex items-center md:justify-end">
                  <li className="flex items-center">
                    <Link
                      href="/"
                      className="text-base text-body-color-dark font-medium hover:text-primary pr-1"
                    >
                      Home
                    </Link>
                    <span className="border-body-color-dark border-r-2 border-t-2 h-2 w-2 block mr-3 rotate-45"></span>
                  </li>
                  <li className="text-base text-primary font-medium">
                    {pageName}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-neg-1">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6D685F" />
                  <stop offset="1" stopColor="#6D685F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 z-neg-1">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                fill="url(#paint0_linear_0:1)"
              />
              <path
                opacity="0.1"
                d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="644"
                  y1="221"
                  x2="429.946"
                  y2="37.0429"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6D685F" />
                  <stop offset="1" stopColor="#6D685F" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="18.3648"
                  y1="166.016"
                  x2="105.377"
                  y2="32.3398"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6D685F" />
                  <stop offset="1" stopColor="#6D685F" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
