//next image
import Image from 'next/image'
//components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
//avatar
import Avatar from '../components/Avatar'
//framer  Motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial ='hidden'
              animate = 'show'
              exit = 'hidden'
              className='h1'>Transforming <br /> Into <span className='text-accent'>Digital Reality</span></motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial ='hidden'
              animate = 'show'
              exit = 'hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 '>
              Unlocking the Future: Crafting Seamless Digital Experiences – A Fullstack Developer's Journey into the Digital Realm
            </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial ='hidden'
            animate = 'show'
            exit = 'hidden'
            className='hidden xl:flex' 
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1024px] h-full  right-0 bottom-0 absolute">
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer/>
        {/* avatar img */}
        <motion.div 
          className='w-full h-full max-w-[191px] max-h-[255px] absolute -bottom-32 lg:bottom-0 lg:right-[20%]'
          variants={fadeIn('up', 0.2)}
          initial ='hidden'
          animate = 'show'
          exit = 'hidden'
          transition={{duration:1, ease:'easeInOut'}}
        >
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
