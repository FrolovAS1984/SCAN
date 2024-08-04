import { useState, useEffect } from 'react';
import ArticleCard from "./articleCard/ArticleCard.jsx";

import './ArticleCards.css';

import article_picture from '../../../images/article_picture.png';



// eslint-disable-next-line react/prop-types
function ArticleCards({ documentsData }) {
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(2);

  useEffect(() => {
    if (documentsData && Array.isArray(documentsData)) {
      // eslint-disable-next-line react/prop-types
      const transformedArticles = documentsData.map(doc => ({
        date: new Date(doc.ok.issueDate).toLocaleDateString("ru-RU"),
        url: doc.ok.url,
        sourceName: doc.ok.source.name,
        isTechNews: doc.ok.attributes.isTechNews,
        isAnnouncement: doc.ok.attributes.isAnnouncement,
        isDigest: doc.ok.attributes.isDigest,
        title: doc.ok.title.text,
        content: doc.ok.content.markup,
        wordCount: doc.ok.attributes.wordCount,
        picture: article_picture,
      }));

      setArticles(transformedArticles);
    }
  }, [documentsData]);


  // Функция для загрузки статей
  const showMoreArticles = () => {
    setDisplayedArticles(prev => prev + 2); // Показывать на две статьи больше
  };

  return (
    <div className="article-cards-block">
      <h2 className="h2-search-results-page-articles">Список документов</h2>
      <div className="article-cards">
        {articles.slice(0, displayedArticles).map((article, index) => (
            <ArticleCard key={index} {...article} />
        ))}
      </div>
      {displayedArticles < articles.length && (
        <div className="button-div">
            <button className="button show-more" onClick={showMoreArticles} >Показать больше</button>
        </div>
      )}
    </div>
  );
}

export default ArticleCards;