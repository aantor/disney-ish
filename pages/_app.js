// import '../styles/globals.css'
import { theme } from 'twin.macro';
import GlobalStyles from './../components/GlobalStyles';
import { MinScreenProvider } from '../hooks/minScreen';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MinScreenProvider screens={theme`screens`}>
        <GlobalStyles />
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </MinScreenProvider>
    </>
  );
}

export default MyApp;
