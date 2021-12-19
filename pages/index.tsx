/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import axios from 'axios';
import { IArticle } from '../interfaces/article';
import Article from '../components/Article';

export const getStaticProps: GetStaticProps = async (context) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  if (!API_URL) {
    return {
      props: {
        data: [],
      },
    };
  }

  const categories = ['business', 'science', 'health', 'technology'];
  const data = await Promise.all(
    categories.map((category) =>
      axios
        .get(API_URL + category + '.json')
        .then((resp) => resp.data)
        .then((data) => data.articles as IArticle[])
        .catch(() => [] as IArticle[]),
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
      data: articles,
    },
    revalidate: 60 * 10,
  };
};

const Index = (props: any) => {
  const articles: IArticle[] = props.data;
  console.log(articles.length);
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
