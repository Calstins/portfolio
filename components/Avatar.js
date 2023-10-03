//next image
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image src={'/caleb.png'} width={191} height ={255} className='translate-z-0 w-full h-full' alt='opule-caleb'/>
    </div>
  );
};

export default Avatar;
