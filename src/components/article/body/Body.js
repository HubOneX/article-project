import NotLoaded from "../notLoaded/NotLoaded";
import "./Body.css";

const Body = ({ bodyElements }) => {
  if (!bodyElements || bodyElements.length === 0) {
    return <NotLoaded />;
  }

  return (
    <div className="article-body">
      {bodyElements.map((element) => (
        <div
          dangerouslySetInnerHTML={{ __html: element }}
          key={bodyElements.indexOf(element)}
        />
      ))}
    </div>
  );
};

export default Body;
