import Link from "next/link";
import {RiGithubLine, RiInstagramLine, RiLinkedinLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/Calstins'} className="hover:text-accent transition-all duration-300"
    >
      <RiGithubLine/>
    </Link>
    <Link href={'https://www.instagram.com/calstins/'} className="hover:text-accent transition-all duration-300"
    >
      <RiLinkedinLine/>
    </Link>
    <Link href={'https://www.instagram.com/calstins/'} className="hover:text-accent transition-all duration-300"
    >
      <RiInstagramLine/>
    </Link>
  </div>;
};

export default Socials;
