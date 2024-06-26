//next link
import Link from 'next/link';
//react icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 mb-20">
      <Link
        href={'/work'}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <img
          src={'https://i.postimg.cc/bw3Frj2C/rounded-text.png'}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          height={148}
          width={141}
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
