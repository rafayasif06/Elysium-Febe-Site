//src/components/Video/index.tsx

'use client';

import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tu éxito es nuestra misión"
          paragraph="Como líderes en consultoría, nos enfocamos en entender tus necesidades y acompañarte en cada desafío. Nuestra dedicación es tan personal como nuestro compromiso con tu crecimiento y bienestar"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/video/video.png"
                  alt="video image"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-neg-1 h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
