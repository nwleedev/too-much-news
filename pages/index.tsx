/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import { IArticle } from '../interfaces/article';
import Article from '../components/Article';

export const getStaticProps: GetStaticProps = async (context) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    return {
      props: {
        timestamp: Date.now(),
        data: [],
      },
    };
  }

  const categories = ['business', 'science', 'health', 'technology'];

  const data = await Promise.all(
    categories.map((category) =>
      fetch(API_URL + category)
        .then((resp) => resp.json())
        .then((data) => data.articles as IArticle[])
        .catch((err) => {
          return [] as IArticle[];
        }),
    ),
  );

  const collection: { [url: string]: IArticle } = {};
  data.forEach((array) => {
    array.forEach((el) => {
      if (
        el.url.includes('https') &&
        el.urlToImage &&
        el.urlToImage.includes('https')
      ) {
        collection[el.url] = el;
      }
    });
  });

  const articles: IArticle[] = Object.values(collection);
  articles.sort(
    (b, a) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
  );
  return {
    props: {
      timestamp: Date.now(),
      data: articles,
    },
    revalidate: 60,
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
