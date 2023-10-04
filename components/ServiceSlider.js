import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxSpeakerLoud
} from 'react-icons/rx'
import {LuContact} from 'react-icons/lu'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxSpeakerLoud />,
    title: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <LuContact />,
    title: 'Consultation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return <Swiper 
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640:{
          slidesPerView: 3,
          spaceBetween: 15,
        },    
      }}
      freeMode={true}
      pagination = {{
        clickable: true
      }}
      modules= {[FreeMode,  Pagination, Autoplay]}
      autoplay={{
        display: 2500,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((service, index)=> {
          return <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-point hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icon */}
                <div className='text-4xl text-accent mb-4'>{service.icon}</div>
                {/* description */}
                
                <div className='mb-8'>
                  <div className='mb-2 text-lb'>{service.title}</div>
                  <p className='max-w-[350px] leading-normal'>{service.description}</p>
                </div>
                <div className='text-3xl'> 
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
        })
      }
    </Swiper>
};

export default ServiceSlider;
