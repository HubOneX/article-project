const MainImage = ({ image }) => {
  return (
    <>
      {image.url && (
        <img className="article-image" src={image.url} alt={image.caption} />
      )}
    </>
  );
};

export default MainImage;
