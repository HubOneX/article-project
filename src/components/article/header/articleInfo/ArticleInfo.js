import dateUtils from "../../../../utils/dateUtils";
import "./ArticleInfo.css";

const ArticleInfo = ({ date, author }) => {
  const formattedDate = dateUtils.formatDateForArticle(date);

  return (
    <div className="article-info">
      <p className="article-author">{author ? author : "Anonymous"}</p>
      <p className="article-date">{formattedDate}</p>
    </div>
  );
};

export default ArticleInfo;
