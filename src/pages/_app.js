import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9XPYEYWQ5N"></Script>

      <Script id="google-analytics">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9XPYEYWQ5N');`}
      </Script>
      <Header />

      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
