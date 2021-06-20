import { ArticleListElement } from 'model/sections';
import Article from '../Article/Article';

const ArticleList = ({ content }: { content: ArticleListElement }): JSX.Element => {
  return (
    <div className="w-full px-4 py-6">
      <div className="text-center py-4 px-3 my-0 mx-auto shadow-articleList-sm md:shadow-articleList-lg max-w-screen-xl md:w-11/12">
        {content.articles.map((article, idx) => (
          <Article article={article} key={article.id} articleIndex={idx} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
