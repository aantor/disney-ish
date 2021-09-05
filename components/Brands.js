import tw from 'twin.macro';
import Image from 'next/image';

export default function Brands() {
  return (
    <section tw='flex flex-col mx-auto md:flex-row justify-center items-center mt-10 gap-6 max-w-[1400px]'>
      <$Brand className='group'>
        <Image
          src='/images/disnep.png'
          layout='fill'
          objectFit='cover'
          alt=''
        />
        <video
          autoPlay
          loop
          playsInline
          hidden
          tw='group-hover:inline rounded-lg'
          object-cover
        >
          <source src='/videos/disney.mp4' type='video/mp4' />
        </video>
      </$Brand>
      <$Brand className='group'>
        <Image src='/images/pixar.png' layout='fill' objectFit='cover' alt='' />
        <video
          autoPlay
          loop
          playsInline
          hidden
          tw='group-hover:inline rounded-lg'
          object-cover
        >
          <source src='/videos/pixar.mp4' type='video/mp4' />
        </video>
      </$Brand>
      <$Brand className='group'>
        <Image
          src='/images/marvel.png'
          layout='fill'
          objectFit='cover'
          alt=''
        />
        <video
          autoPlay
          loop
          playsInline
          hidden
          tw='group-hover:inline rounded-lg'
          object-cover
        >
          <source src='/videos/marvel.mp4' type='video/mp4' />
        </video>
      </$Brand>
      <$Brand className='group'>
        <Image
          src='/images/starwars.png'
          layout='fill'
          objectFit='cover'
          alt=''
        />
        <video
          autoPlay
          loop
          playsInline
          hidden
          tw='group-hover:inline rounded-lg'
          object-cover
        >
          <source src='/videos/star-wars.mp4' type='video/mp4' />
        </video>
      </$Brand>
      <$Brand className='group'>
        <Image
          src='/images/national-geographic.png'
          layout='fill'
          objectFit='cover'
          alt=''
        />
        <video
          autoPlay
          loop
          playsInline
          hidden
          tw='group-hover:inline rounded-lg'
          object-cover
        >
          <source src='/videos/national-geographic.mp4' type='video/mp4' />
        </video>
      </$Brand>
    </section>
  );
}

const $Brand = tw.article`
    flex relative h-32 w-52 border-[3px] border-[#f9f9f9] border-opacity-10
    transition duration-300 rounded-lg cursor-pointer shadow-xl overflow-hidden transform
    hover:(border-opacity-80 scale-105 shadow-2xl)
    sm:(w-64 h-36)
 `;
