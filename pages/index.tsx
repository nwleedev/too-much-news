/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import axios from 'axios';
import { IArticle } from '../interfaces/article';
import Article from '../components/Article';

export const getStaticProps: GetStaticProps = async (context) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  if (!API_KEY) {
    return {
      props: {
        data: [],
      },
    };
  }

  const API_URL = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}&category=`;
  const categories = [
    'business',
    'entertainment',
    'science',
    'health',
    'technology',
  ];
  const data = await Promise.all(
    categories.map((category) =>
      axios
        .get(API_URL + category)
        .then((resp) => resp.data)
        .then((data) => data.articles as IArticle[])
        .catch(() => [] as IArticle[]),
    ),
  );

  const collection: IArticle[] = [];
  data.forEach((array) => {
    collection.push(...array);
  });
  const articles = collection.filter(
    (el) =>
      el.url.includes('https') &&
      el.urlToImage &&
      el.urlToImage.includes('https'),
  );
  articles.sort(
    (b, a) =>
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime(),
  );
  return {
    props: {
      data: articles,
    },
    revalidate: 60 * 60,
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
