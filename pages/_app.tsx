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
        <meta
          name="keywords"
          content="뉴스,정보,국제,시사,경제,환경,날씨,기후,너무많은뉴스,toomuchnews,toomuch,신문,인터넷신문,문화,사람,연예,스포츠,이야기,게임"
        />
        <meta name="og:image" content="/main_icon.png" />
        <meta name="twitter:image" content="/main_icon.png" />
        <meta name="theme-color" content="#f3f4f7" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
