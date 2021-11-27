export interface ISource {
  id: any;
  name: string | null;
}

export interface IArticle {
  source: ISource;
  author: string;
  title: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
}
