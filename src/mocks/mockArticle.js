import { urls } from "../constants/urls";

export const mockArticle = {
  author: "Stephen King",
  heading: "The horror of tests",
  date: "2020-09-03T07:27:59.490",
  image: { url: urls.globalUrl + "/url", caption: "main image" },
  body: ["<h2>Secondary heading</h2>", "<p>The paragraph below!</p>"],
};

export const mockArticleEmptyValues = {
  author: "",
  heading: "",
  date: "",
  image: { url: "", caption: "" },
  body: "",
};

export const mockArticleResponse = {
  data: {
    elements: {
      author: { value: "Stephen King" },
      heading: { value: "The horror of tests" },
      date: { value: "2020-09-03T07:27:59.490" },
      mainImage: {
        value: {
          leadImage: { renditions: { lead: { source: "/url" } } },
          leadImageCaption: { value: "main image" },
        },
      },
      body: {
        values: ["<h2>Secondary heading</h2>", "<p>The paragraph below!</p>"],
      },
    },
  },
};
