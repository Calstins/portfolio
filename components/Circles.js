import Image from 'next/image';

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={'https://i.postimg.cc/MK0LkBZ8/circles.png'}
        className="w-full h-full"
        alt=""
        width={260}
        height={200}
      />
    </div>
  );
};

export default Circles;
