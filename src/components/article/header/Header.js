import Title from "./title/Title";
import ArticleInfo from "./articleInfo/ArticleInfo";
import "./Header.css";

const Header = ({ heading, publicationDate, author }) => {
  return (
    <div className="article-header">
      <ArticleInfo date={publicationDate} author={author} />
      <hr />
      <Title text={heading} />
    </div>
  );
};

export default Header;
