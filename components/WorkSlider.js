import Image from 'next/image';
import { RiGithubLine } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Freestyle Working ltd',
          path: 'https://i.postimg.cc/tT3jWp7W/Untitled-design-26.png',
          technology: 'React GSAP Tailwind',
          url: 'https://freestyleworking.ltd',
          github: 'https://github.com/Calstins/freestyleworking',
        },
        {
          title: 'Italian Coffee Venture',
          path: 'https://i.postimg.cc/fykNVFSh/icv.png',
          technology: 'Woocommerce',
          url: 'https://italiancoffee.ng',
        },
        {
          title: 'Yehgs UK LTD',
          path: 'https://i.postimg.cc/rw53hcSp/yehgs-1.png',
          technology: 'React Framer-motion Tailwind',
          url: 'https://yehgs.co.uk',
          github: 'https://github.com/Calstins/yehgs-website',
        },
        {
          title: 'Barattini Coffee Ventures',
          path: 'https://i.postimg.cc/cCsk58B1/barattin.png',
          technology: 'E-commerce',
          url: 'https://barattini.coffee',
        },
      ],
    },
  ],
};
i;
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((work, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {work.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-x-2 text-[13px]">
                          <div className="text-xl">
                            {/* title-part-1 */}
                            {image.title}
                          </div>
                          {image.technology && (
                            <div className="delay-100">
                              <p>{image.technology}</p>
                            </div>
                          )}
                          <div className="flex items-center gap-x-2 text-[13px]">
                            {image.url && (
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-100"
                              >
                                <a
                                  href={image.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <TbWorldWww className="text-xl" />
                                </a>
                              </motion.div>
                            )}
                            {image.github && (
                              <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
                              >
                                <a
                                  href={image.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <RiGithubLine className="text-xl" />
                                </a>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
