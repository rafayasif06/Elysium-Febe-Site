'use client';
import { useTranslation } from 'react-i18next';
import NewsLatterBox from './NewsLatterBox';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="lg:py-28 md:py-20 overflow-hidden py-16">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-7/12 px-4 xl:w-8/12">
            <div
              className="bg-gray-dark rounded-sm shadow-three lg:mb-5 lg:px-8 mb-12 px-8 py-11 sm:p-[55px] xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="text-2xl text-white font-bold lg:text-2xl mb-3 sm:text-3xl xl:text-3xl">
                {t('need_help')}
              </h2>
              <p className="text-base text-body-color-dark font-medium mb-12">
                {t('support_team')}
              </p>
              <form>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-sm text-white block font-medium mb-3"
                      >
                        {t('your_name')}
                      </label>
                      <input
                        type="text"
                        placeholder={t('enter_name')}
                        className="bg-[#2C303B] border border-stroke rounded-sm shadow-two text-base text-body-color-dark w-full focus:border-primary focus:shadow-none outline-none px-6 py-3"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-sm text-white block font-medium mb-3"
                      >
                        {t('your_email')}
                      </label>
                      <input
                        type="email"
                        placeholder={t('enter_email')}
                        className="bg-[#2C303B] border border-stroke rounded-sm shadow-two text-base text-body-color-dark w-full focus:border-primary focus:shadow-none outline-none px-6 py-3"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-sm text-white block font-medium mb-3"
                      >
                        {t('your_message')}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={t('enter_message')}
                        className="bg-[#2C303B] border border-stroke rounded-sm shadow-two text-base text-body-color-dark w-full focus:border-primary focus:shadow-none outline-none px-6 py-3 resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="bg-primary rounded-sm shadow-submit-dark text-base text-white duration-300 font-medium hover:bg-primary/90 px-9 py-4">
                      {t('send_ticket')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-4 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
