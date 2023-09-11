import axios from "axios";
import { useEffect, useState } from "react";
import { urls } from "../../constants/urls";

export const useGetArticleById = (id) => {
  const [article, setArticle] = useState({});
  const [isError, setIsError] = useState(false);

  const fetchArticleById = async (id) => {
    let data;

    await axios
      .get(urls.articleByIdUrl + id)
      .then((response) => {
        console.log({ response }, response.data.elements);
        const { elements } = response.data;
        data = {
          author: elements?.author?.value || "",
          heading: elements?.heading?.value || "",
          date: elements?.date?.value || "",
          image: {
            url: elements?.mainImage?.value?.leadImage?.renditions?.lead?.source
              ? urls.globalUrl +
                elements.mainImage.value.leadImage.renditions.lead.source
              : "",
            caption: elements?.mainImage?.value?.leadImageCaption?.value || "",
          },
          body: elements?.body?.values || "",
        };
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });

    if (data) {
      setArticle(data);
    }
  };

  useEffect(() => {
    fetchArticleById(id);
  }, [id]);

  return { article, isError };
};
