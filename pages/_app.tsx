import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>너무 많은 신문</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="넘치는 정보 속에서 필요한 것들만 편하게 보세요."
        />
        <meta name="og:image" content="/too_many_news.png" />
        <meta name="twitter:image" content="/too_many_news.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
