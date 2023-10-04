import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

export const servicesData = [

]
const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 items-center'>
      <Circles/>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left'>
            <motion.h2
             className='h2 xl:mt-8'
             variants={fadeIn('up', 0.3)}
             initial="hidden"
             animate='show'
             exit='hidden'
            >
              My services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
             className='mb-4 max-w-[400px] mx-auto lg-mx-0'
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             animate='show'
             exit='hidden'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda voluptatum magni ad minus soluta autem voluptatem commodi eligendi totam?
            </motion.p>
          </div>
          {/* slider */}
          <motion.div 
            className='w-full xl:max-w-[65%]'
            variants={fadeIn('down', 0.6)}
             initial="hidden"
             animate='show'
             exit='hidden'
          >
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
};


export default Services;