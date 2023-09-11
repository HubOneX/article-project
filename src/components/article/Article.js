import Body from "./body/Body";
import Header from "./header/Header";
import MainImage from "./mainImage/MainImage";
import NotLoaded from "./notLoaded/NotLoaded";
import ArticleWrapper from "./wrapper/ArticleWrapper";

const Article = ({ article, isError }) => {
  if (isError || !article) {
    return <NotLoaded />;
  }
  const { author, heading, date, image, body } = article;

  return (
    <ArticleWrapper>
      <MainImage image={image} />
      <Header heading={heading} publicationDate={date} author={author} />
      <Body bodyElements={body} />
    </ArticleWrapper>
  );
};

export default Article;
