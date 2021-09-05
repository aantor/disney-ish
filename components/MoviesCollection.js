import tw from 'twin.macro';
import MovieThumbnail from './MovieThumbnail';

export default function MoviesCollection({ results, title }) {
  return (
    <$Section>
      <$Title>{title}</$Title>
      <div tw='flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2'>
        {results.map((result) => (
          <MovieThumbnail key={result.id} result={result} />
        ))}
      </div>
    </$Section>
  );
}

const $Section = tw.section`relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto`;

const $Title = tw.h2`font-semibold`;
