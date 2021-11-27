import { useState } from 'react';
import { IArticle } from '../interfaces/article';

const Article = ({ article, i }: { article: IArticle; i: number }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className={`shadow-xl rounded-xl opacity-${isSelected ? '100' : '60'}`}
    >
      <div
        className={`rounded-xl h-80 px-2 py-1 `}
        style={{
          backgroundImage: `url(${article.urlToImage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        onMouseOver={(e) => {
          setIsSelected(true);
        }}
        onMouseLeave={(e) => {
          setIsSelected(false);
        }}
      >
        {isSelected && (
          <h2
            className="text-white text-lg font-semibold"
            style={{
              textShadow: '0.2px 0.2px 4px black',
            }}
          >
            {article.title}
          </h2>
        )}
      </div>
    </a>
  );
};

export default Article;
