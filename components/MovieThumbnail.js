import Image from 'next/image';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

export default function MovieThumbnail({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  const router = useRouter();

  return (
    <$Article onClick={() => router.push(`/movie/${result.id}`)}>
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt=''
        width={330}
        height={210}
        objectFit='cover'
        className='rounded-lg'
      />
    </$Article>
  );
}

const $Article = tw.article`
    flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:(border-opacity-80 shadow-2xl) transform hover:scale-105 transition duration-300
`;
