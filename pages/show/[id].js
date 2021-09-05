/* eslint-disable @next/next/no-img-element */
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
import { Header, Hero } from '../../components';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { useEffect, useState } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/solid';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';

export default function Show({ result }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const router = useRouter();

  const [session] = useSession();
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [router, session]);

  const index = result.videos.results.findIndex(
    (element) => element.type === 'Trailer'
  );

  return (
    <>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {!session ? (
        <Hero />
      ) : (
        <section tw='relative z-50'>
          <div tw='relative min-h-[calc(100vh - 72px)]'>
            <Image
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              alt=''
              layout='fill'
              objectFit='cover'
            />
          </div>
          <$MovieInfo>
            <h1 tw='text-3xl sm:text-4xl md:text-5xl'>
              {result.title || result.original_name}
            </h1>
            <div tw='flex items-center space-x-3 md:space-x-5'>
              <$PlayButton>
                <img tw='h-6 md:h-8' src='/images/play-icon-black.svg' alt='' />
                <span tw='uppercase font-medium tracking-wide'>Play</span>
              </$PlayButton>
              <$TrailerButton onClick={() => setShowPlayer(true)}>
                <img src='/images/play-icon-white.svg' alt='' tw='h-6 md:h-8' />
                <span tw='uppercase font-medium tracking-wide'>Trailer</span>
              </$TrailerButton>
              <div
                tw='rounded-full border-2 border-white flex items-center justify-center
               w-11 h-11 cursor-pointer bg-black/60'
              >
                <PlusIcon tw='h-6' />
              </div>
              <div
                tw='rounded-full border-2 border-white flex items-center justify-center
               w-11 h-11 cursor-pointer bg-black/60'
              >
                <img src='/images/group-icon.svg' alt='' />
              </div>
            </div>

            <p tw='text-xs md:text-sm'>
              {result.release_date || result.first_air_date} •{' '}
              {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{' '}
              {result.genres.map((genre) => genre.name + ' ')}{' '}
            </p>
            <h4 tw='text-sm md:text-lg max-w-4xl'>{result.overview}</h4>
          </$MovieInfo>
          {showPlayer && <$Overlay />}
          <$PlayerWrapper showPlayer={showPlayer}>
            <div tw='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
              <span className='font-semibold'>Play Trailer</span>
              <div
                tw='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className='h-5' />
              </div>
            </div>
            <$Player>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                width='100%'
                height='100%'
                style={{ position: 'absolute', top: '0', left: '0' }}
                controls={true}
                playing={showPlayer}
              />
            </$Player>
          </$PlayerWrapper>
        </section>
      )}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { id } = ctx.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  ).then((res) => res.json());

  return {
    props: {
      session,
      result: request,
    },
  };
};

const $MovieInfo = tw.div`absolute inset-y-20 md:(inset-y-auto bottom-10 inset-x-12) inset-x-4 space-y-6 z-50`;

const $PlayButton = tw.button`text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:(bg-[#c6c6c6])`;

const $TrailerButton = tw.button`text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]`;

const $Overlay = tw.div`absolute inset-0 bg-black/50 h-full w-full z-50`;

const $PlayerWrapper = styled.div(({ showPlayer }) => [
  tw`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000`,
  showPlayer ? tw`opacity-100 z-50` : tw`opacity-0`,
]);

const $Player = tw.div`relative pt-[56.25%]`;
