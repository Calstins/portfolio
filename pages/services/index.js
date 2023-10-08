import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

export const servicesData = [

]
const Services = () => {
  return (
    <div className='bg-primary/30 py-36 items-center'>
      <Circles/>
      <div className="container mx-auto md:w-[1024px]">
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
             className='mb-4 max-w-[400px] mx-auto lg-mx-0 text-[13px]'
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             animate='show'
             exit='hidden'
            >
              Our integrated suite of services covers software development, design, digital marketing, and consultation. We empower businesses to thrive in the digital age, from innovative software solutions to compelling design and effective marketing strategies, all backed by expert consultation for strategic success
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