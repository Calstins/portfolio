import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

export const servicesData = [

]
const Work = () => {
  return (
    <div className=' bg-primary/30 py-36 items-center'>
      <Circles/>
      <div className="container mx-auto md:w-[1024px]">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left'>
            <motion.h2
             className='h2 xl:mt-12'
             variants={fadeIn('up', 0.2)}
             initial="hidden"
             animate='show'
             exit='hidden'
            >
              My Work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
             className='mb-4 max-w-[400px] mx-auto lg-mx-0'
             variants={fadeIn('up', 0.4)}
             initial="hidden"
             animate='show'
             exit='hidden'
            >
              As a full-stack developer and digital marketer, I&apos;ve seamlessly
              integrated technical expertise with marketing strategies to create
              dynamic web solutions&nbsp; My diverse skill set ensures comprehensive
              solutions for clients&apos; digital needs.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
};


export default Work;
