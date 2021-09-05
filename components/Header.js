/* eslint-disable @next/next/no-img-element */
import tw from 'twin.macro';
import Image from 'next/image';
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

export default function Header() {
  const [session] = useSession();
  const router = useRouter();

  return (
    <header>
      <$Nav>
        <Image
          src='/images/logo.svg'
          alt='Logo'
          width={80}
          height={80}
          tw='cursor-pointer'
          onClick={()=> router.push('/')}
        />
        {session && (
          <$NavList>
            <$NavLink className='group' href='#'>
              <HomeIcon tw='h-4' />
              <$Span>Home</$Span>
            </$NavLink>
            <$NavLink className='group' href='#'>
              <SearchIcon tw='h-4' />
              <$Span>Search</$Span>
            </$NavLink>
            <$NavLink className='group' href='#'>
              <PlusIcon tw='h-4' />
              <$Span>Watchlist</$Span>
            </$NavLink>
            <$NavLink className='group' href='#'>
              <StarIcon tw='h-4' />
              <$Span>Originals</$Span>
            </$NavLink>
            <$NavLink className='group' href='#'>
              <img tw='h-4' src='/images/movie-icon.svg' alt='' />
              <$Span>Movies</$Span>
            </$NavLink>
            <$NavLink className='group' href='#'>
              <img tw='h-4' src='/images/series-icon.svg' alt='' />
              <$Span>Series</$Span>
            </$NavLink>
          </$NavList>
        )}

        {!session ? (
          <$LoginBtn onClick={signIn}>Login</$LoginBtn>
        ) : (
          <img
            tw='rounded-full h-12 w-12 ml-auto cursor-pointer object-cover'
            onClick={signOut}
            src={session.user.image}
            alt={session.user.name}
          />
        )}
      </$Nav>
    </header>
  );
}

const $Nav = tw.nav`flex items-center bg-[#040714] text-white sticky top-0 z-50 px-10  min-h-[4.5rem] md:px-12 `;

const $NavList = tw.div`hidden ml-10 md:flex items-center space-x-6`;

const $NavLink = tw.a`flex items-center space-x-2 cursor-pointer`;

const $Span = tw.span`
  relative uppercase text-sm font-medium
  before:(bg-[#f9f9f9] rounded-bl -bottom-1.5 h-0.5 inset-x-0 absolute transform origin-left scale-x-0 transition-all duration-200) 
  group-hover:before:scale-x-100
`;

const $LoginBtn = tw.button`ml-auto uppercase border px-4 py-1 rounded font-medium tracking-wide hover:(bg-white text-black transition duration-200)`;
