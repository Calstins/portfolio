// import Circles from '../../components/Circles'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {

  return <div className='bg-primary/30'>
      <div className='container mx-auto py-20 text-center xl:text-left flex items-center justify-center'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            className='h2 text-center mb-8'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            Let's <span>Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <div className='flex gap-x-6 w-full'>
              <input type="text" name="from_name" placeholder='name' className='input'/>
              <input type="email" name="email"  placeholder='email' className='input'/>
            </div>
            <input type="text" name="subject"  placeholder='subject' className='input'/>
            <textarea name="message" placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group hover:border-accent'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%]  opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
};

export default Contact;
