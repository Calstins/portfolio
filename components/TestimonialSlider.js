import Image from 'next/image';
// testimonial data
const testimonialData = [
  {
    image: 'https://i.postimg.cc/05tNxzVh/Untitled-design-28.png',
    name: 'Pirpaolo Tommasini',
    position: 'MD Yehgs UK LTD',
    country: 'United Kingdom',
    message:
      "Caleb's creativity and technical skills brought our project to life. He delivered a stunning and functional website that exceeded our expectations. Highly recommend his services for any web development needs.",
  },
  {
    image: '/austin1.png',
    name: 'Austin Coker',
    position: 'CEO Giggbiggs',
    country: 'United Kingdom',
    message:
      "Caleb's service is exceptional! He turned our vision into a sleek website. His expertise in web development is top-notch.",
  },
  {
    image: 'https://i.postimg.cc/VN4S2Dpb/t-avt-2.png',
    name: 'Yinka',
    position: 'Client',
    country: 'Australia',
    message:
      'Fast, reliable, and innovative. Our software needs were met beyond expectations. Highly recommend their services.',
  },
  {
    image: 'https://i.postimg.cc/kBpccqQ7/mercy.png',
    name: "Ma'am Mercy",
    position: 'CEO Fortune Chain',
    country: 'Nigeria',
    message:
      'Outstanding work by Caleb! He transformed our ideas into a user-friendly platform. His skills in web development are truly impressive.',
  },
];

import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="h-[480px]"
    >
      {testimonialData.map((testimonial, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="m-2 mx-auto">
                    <Image
                      src={testimonial.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="text-lg">{testimonial.name}</div>
                  <div className="text-[9px] uppercase font-extralight tracking-widest">
                    {testimonial.position}
                  </div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {testimonial.country}
                  </div>
                </div>
              </div>
              {/* quote message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl-text-lg text-center md:text-left">
                  {testimonial.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
