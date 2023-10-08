import { useState } from 'react'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaWordpress,
  FaFigma, 
  FaNode,
  FaLaravel
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiCanva,
  SiMui,
  SiAntdesign,
  SiFirebase
} from 'react-icons/si'
import CountUp from 'react-countup';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5  key={1}/>,
          <FaCss3  key={2}/>,
          <FaJs  key={3}/>,
          <FaReact  key={4}/>,
          <SiNextdotjs  key={5}/>,
          <SiFramer  key={6}/>,
          <SiMui key={7}/>,
          <SiAntdesign key={8}/>,
          <FaPhp key={9}/>,
          <FaWordpress  key={10}/>,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <FaNode  key={1}/>,
          <FaPhp key={2}/>,
          <FaLaravel key={3}/>,
          <SiFirebase key={4}/>
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1}/>, <SiCanva key={2} />, <SiAdobephotoshop key={3}/>],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Developer - Yehgs UK Ltd',
        stage: '2021 - 2023',
      },
      {
        title: 'Digital Marketer - Italian Coffee Ventures',
        stage: '2021 - 2023',
      },
    ],
  },
  {
    title: 'course',
    info: [
      {
        title: 'Web Development Bootcamp - App Brewery',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Web Development Bootcamp- App Brewery',
        stage: '2021',
      },
      {
        title: 'Full-Stack Web Development - Codar Institute',
        stage: '2022',
      },
      {
        title: 'Software Engineering - ALX Africa',
        stage: '2023',
      },
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const About = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  console.log(indexes);

  return <div className=' bg-primary/30 py-32 text-center xl:text-left'>
    {/* circles */}
    <Circles/>
    {/* avatar */}
    <motion.div 
      className='hidden xl:flex absolute bottom-0 -left-[370px]'
      variants={fadeIn('right', 0.2)}
      exit='hidden'
      animate='show'
      initial='hidden'
    > 
      <Avatar/>
    </motion.div>
    <div className='container mx-auto flex flex-col items-center xl:flex-row gap-x-6 md:w-[1024px]'>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center mb-10'>
        <motion.h2 
          variants={fadeIn('right', 0.2)}
          exit='hidden'
          animate='show'
          initial='hidden'
          className='h3'>Captivating <span className='text-accent'>stories</span> birth magnificent designs.
        </motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)}
          exit='hidden'
          animate='show'
          initial='hidden' 
          className='max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0'>Hi there!<br />5 years ago, I began freelancing as a developer, Since then, I&apos;ve done remote work for agencies, consulting for startups, and collaborated on digital products for business and consumer use</motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          exit='hidden'
          animate='show'
          initial='hidden'
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0'>
          <div className='flex flex-1 xl:gap-x-6'>
            {/* experience */}
            <div className='relative flex-1 after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of Experience</div>
            </div>
            {/* client */}
            <div className='relative flex-1 after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={157} duration={5}/> +
                </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Clients</div>
            </div>
            {/* project */}
            <div className='relative flex-1 after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>finished Projects</div>
            </div>
            {/* award */}
            <div className='relative flex-1'>
              <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5}/> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning Awards</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        exit='hidden'
        animate='show'
        initial='hidden'
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div 
          className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'
        >
          {aboutData.map((item, index)=>{
            return (
              <div 
                key={index} 
                className = {`${
                  selectedTabIndex === index && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={()=>
                  setSelectedTabIndex(index)
                }
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className= 'py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[selectedTabIndex].info.map((item, index)=>{
            return(
              <div key={index} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                <div className="hidden md:flex ">-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {
                    item.icons?.map((icon, index)=>{
                      return(<div key={index} className='text-l text-white'>{icon}</div>)
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>
};

export default About;
