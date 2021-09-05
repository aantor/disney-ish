import Head from 'next/head';
import Image from 'next/image';

function Hero() {
  return (
    <section tw='relative'>
      <Head>
        <title>Log in | Disney+</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div tw='relative min-h-[calc(100vh - 72px)]'>
        <Image
          src='/images/hero-background.jpg'
          layout='fill'
          objectFit='cover'
          alt=''
        />
      </div>
      <div tw='flex justify-center items-center'>
        <div tw='absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16'>
          <Image
            src='/images/cta-logo-one.svg'
            width='600'
            height='150'
            objectFit='contain'
            alt=''
          />
          <button tw='bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]'>
            Get all there
          </button>
          <p tw='text-xs text-center '>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $
          </p>
          <Image
            src='/images/cta-logo-two.png'
            width='600'
            height='70'
            objectFit='contain'
            alt=''
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
