'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AboutSectionTwo = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:py-28 md:py-20 py-16">
      <div className="container">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-center aspect-[25/24] lg:m-0 max-w-[500px] mb-12 mx-auto relative">
              <Image
                src="/images/about/recep.png"
                alt={t('Elysium about image')}
                fill
                className="max-w-full mx-auto"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-[470px]">
              {/* Seguridad Section */}
              <div className="mb-9">
                <h3 className="text-white text-xl font-bold lg:text-xl mb-4 sm:text-2xl xl:text-2xl">
                  {t('Seguridad')}
                </h3>
                <p className="text-base text-body-color-dark font-medium leading-relaxed sm:leading-relaxed sm:text-lg">
                  {t(
                    'En Elysium, la seguridad va más allá de proteger datos: es asegurar futuros. Nos enfocamos en analizar cada situación para garantizar tranquilidad y construir bases sólidas para tus proyectos.'
                  )}
                </p>
              </div>

              {/* Confianza Section */}
              <div className="mb-9">
                <h3 className="text-white text-xl font-bold lg:text-xl mb-4 sm:text-2xl xl:text-2xl">
                  {t('Confianza')}
                </h3>
                <p className="text-base text-body-color-dark font-medium leading-relaxed sm:leading-relaxed sm:text-lg">
                  {t(
                    'La confianza es el pilar de nuestro éxito. Más del 99% de nuestros clientes regresan, sabiendo que cumplimos cada promesa con integridad, y nos esforzamos cada día por mantener esa confianza.'
                  )}
                </p>
              </div>

              {/* Excelencia Section */}
              <div className="mb-1">
                <h3 className="text-white text-xl font-bold lg:text-xl mb-4 sm:text-2xl xl:text-2xl">
                  {t('Excelencia')}
                </h3>
                <p className="text-base text-body-color-dark font-medium leading-relaxed sm:leading-relaxed sm:text-lg">
                  {t(
                    'Nos dedicamos a la perfección en cada detalle. Trabajamos con los mejores para ofrecer soluciones innovadoras que no solo resuelvan problemas, sino que inspiren y transformen cada proyecto en algo extraordinario.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
