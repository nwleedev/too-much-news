/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import axios from 'axios';
import { IArticle } from '../interfaces/article';
import Article from '../components/Article';

export const getStaticProps: GetStaticProps = async (context) => {
  const BANNED_URLS = 'visitkorea' || 'inews24';
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    return {
      props: {
        data: [],
      },
    };
  }
  const resp = await axios.get(API_URL);
  const data: IArticle[] = resp.data.articles;

  const articles = data.filter(
    (el) =>
      el.url.includes('https') &&
      el.urlToImage &&
      el.urlToImage.includes('https') &&
      !el.urlToImage.includes(BANNED_URLS),
  );
  return {
    props: {
      data: articles,
    },
    revalidate: 30 * 60,
  };
};

const Index = (props: any) => {
  const articles: IArticle[] = props.data;
  return (
    <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {articles &&
        articles.map(
          (article, i) =>
            article.urlToImage && <Article article={article} i={i} key={i} />,
        )}
    </div>
  );
};

export default Index;
