import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);
  return (
    <>
      <Head>
        <title>너무 많은 신문</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
