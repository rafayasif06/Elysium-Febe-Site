// src/components/Footer/index.tsx

'use client';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/Common/SectionTitle';
import Marquee from '@/components/Marquee/Marquee';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="bg-gray-dark lg:pt-24 md:pt-20 pt-16 relative z-10">
        {/* Container for the SectionTitle */}
        <div className="container">
          <SectionTitle
            title={t('Building lasting')}
            paragraph={t('partnerships')}
            center
            mb="60px"
          />
        </div>

        {/* Marquee moved outside the container so its lateral content is visible */}
        <div
          className="flex flex-col p-8 gap-12 overflow-visible relative sm:p-6"
          id="next-section"
        >
          <Marquee />
        </div>

        {/* Rest of the Footer Content inside the container */}
        <div className="container">
          <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full lg:w-4/12 md:w-1/2 px-4 xl:w-5/12">
              <div className="lg:mb-16 max-w-[360px] mb-12">
                <Link href="/" className="inline-block mb-8">
                  <Image
                    src="/images/logo/elysium-logo.svg"
                    alt="logo"
                    className="w-full"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-base text-body-color-dark leading-relaxed mb-9">
                  {t('Elysium description')}
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color-dark duration-300 hover:text-primary mr-6"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color-dark duration-300 hover:text-primary mr-6"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color-dark duration-300 hover:text-primary mr-6"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color-dark duration-300 hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Footer Column: Useful Links */}
            <div className="w-full lg:w-2/12 md:w-1/2 px-4 sm:w-1/2 xl:w-2/12">
              <div className="lg:mb-16 mb-12">
                <h2 className="text-white text-xl font-bold mb-10">
                  {t('Useful links')}
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/listofposts"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('Recent posts')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('Services')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('About us')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Column: Legal */}
            <div className="w-full lg:w-2/12 md:w-1/2 px-4 sm:w-1/2 xl:w-2/12">
              <div className="lg:mb-16 mb-12">
                <h2 className="text-white text-xl font-bold mb-10">
                  {t('Legal')}
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/terms"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('Terms of service')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('Privacy policy')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/refunds"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('Refund policy')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Footer Column: Soporte */}
            <div className="w-full lg:w-4/12 md:w-1/2 px-4 xl:w-3/12">
              <div className="lg:mb-16 mb-12">
                <h2 className="text-white text-xl font-bold mb-10">
                  {t('Support')}
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('Contact')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('FAQs')}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-base text-body-color-dark duration-300 hover:text-primary inline-block mb-4"
                    >
                      {t('About us')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r h-px w-full from-transparent to-transparent via-[#D2D8E183]"></div>
          <div className="py-8">
            <p className="text-base text-center text-white">
              {t('© Elysium Consulting Firm. All rights reserved.')}
            </p>
          </div>
        </div>

        {/* SVG Decorations */}
        <div className="absolute right-0 top-14 z-neg-1">
          {/* ... SVG content ... */}
        </div>
        <div className="absolute bottom-24 left-0 z-neg-1">
          {/* ... SVG content ... */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
