import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import TestimonialSlider from "../../components/TestimonialSlider";


const Testimonials = () => {
  return (
    <div className="bg-primary/30 py-32 text-center ">
      <div className="container mx-auto h-full flex flex-col justify-center md:w-[1024px]">
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          exit='hidden'
          animate='show'
          className="h2 mb-8 xl:mb-0"
        >
          what clients <span className="text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          exit='hidden'
          animate='show'
        >
          <TestimonialSlider/>
        </motion.div>
        
      </div>
    </div>
  )
};

export default Testimonials;
