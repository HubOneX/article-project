import "./App.css";
import Article from "./components/article/Article";
import Loader from "./components/loader/Loader";
import { useGetArticleById } from "./hooks/useGetArticleById/useGetArticleById";
import { useEffect, useState } from "react";
import objectUtils from "./utils/objectUtils";

const givenId = "db4930e9-7504-4d9d-ae6c-33facca754d1";

function App() {
  const { article, isError } = useGetArticleById(givenId);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (article && objectUtils.isEmptyObject(article) && !isError) {
      setIsLoading(true);
      return;
    }

    if (isError || article) {
      setIsLoading(false);
    }
  }, [article, isError]);

  return (
    <div className="App">
      {isLoading ? <Loader /> : <Article article={article} isError={isError} />}
    </div>
  );
}

export default App;
