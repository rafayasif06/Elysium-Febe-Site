// src/components/About/AboutSectionOne.tsx
'use client';
import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useTranslation } from 'react-i18next';

// Define the props interface
interface ListProps {
  text: string;
}

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

// Type the List component using the interface
const List: React.FC<ListProps> = ({ text }) => (
  <p className="flex text-body-color text-lg font-medium items-center mb-5">
    <span className="flex bg-opacity-10 bg-primary h-[30px] justify-center rounded-md text-primary w-[30px] items-center mr-4">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  const { t } = useTranslation(); // ✅ Use Translation Hook
  return (
    <section id="about" className="lg:pt-28 md:pt-20 pt-16">
      <div className="container">
        <div className="border-b border-white/[.15] lg:pb-28 md:pb-20 pb-16">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4">
              <SectionTitle
                title={t('Elysium en cifras')} // ✅ Translate Title
                paragraph={t(
                  'A lo largo de los años, hemos construido una reputación sólida que se sustenta en la satisfacción y la lealtad de nuestros clientes. A continuación, algunos de los números que avalan nuestro trabajo'
                )} // ✅ Translate Paragraph
                mb="44px"
              />

              <div
                className="lg:mb-0 max-w-[570px] mb-12"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap mx-[-12px]">
                  <div className="w-full lg:w-full px-3 sm:w-1/2 xl:w-1/2">
                    <List text={t('+15 Años de experiencia')} />{' '}
                    {/* ✅ Translate List Items */}
                    <List text={t('<48h Respuesta rápida')} />
                  </div>

                  <div className="w-full lg:w-full px-3 sm:w-1/2 xl:w-1/2">
                    <List text={t('90 % clientes recurrentes')} />
                    <List text={t('Otros datos')} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="aspect-[25/24] lg:mr-0 max-w-[500px] mx-auto relative">
                <Image
                  src="/images/about/ruffl.png"
                  alt={t('Elysium about image')} // ✅ Translate Alt Text
                  fill
                  className="drop-shadow-none lg:mr-0 max-w-full mx-auto" // Remove dark: classes
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
