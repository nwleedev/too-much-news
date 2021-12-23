import { MouseEvent, useEffect, useState } from 'react';
import { IArticle } from '../interfaces/article';
import { useRouter } from 'next/router';

const Article = ({ article, i }: { article: IArticle; i: number }) => {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const background = document.getElementById(`background_${i}`);
    if (background && !background?.style.backgroundImage) {
      console.log('Background Image Error');
      background.style.backgroundImage = "url('/on_error.png')";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.localStorage.setItem('article', JSON.stringify(article));
    router.push('/news');
  };
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={`shadow-xl rounded-xl`}
      onClick={handleClick}
    >
      <div
        id={`background_${i}`}
        className={`rounded-xl h-80 px-2 py-1`}
        style={{
          backgroundImage: `url(${article.urlToImage}), url('/on_error.png')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: isSelected ? 1 : 0.5,
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
