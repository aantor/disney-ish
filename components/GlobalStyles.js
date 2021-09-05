import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased bg-[#040714] text-[#f9f9f9] font-body scrollbar-hide`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
