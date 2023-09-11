import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Article from "./Article";
import { mockArticle } from "../../mocks/mockArticle";

describe("Article", () => {
  it("should return NotLoaded element if an error is provided", () => {
    render(<Article isError article={mockArticle} />);
    const notLoaded = screen.getByText(
      "Sorry, we couldn't load this article. Please try again later."
    );

    expect(notLoaded).toBeInTheDocument();
  });

  it("should return NotLoaded element if the artcile is not provided", () => {
    render(<Article isError={false} article={undefined} />);
    const notLoaded = screen.getByText(
      "Sorry, we couldn't load this article. Please try again later."
    );

    expect(notLoaded).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const article = renderer.create(
      <Article article={mockArticle} isError={false} />
    );

    expect(article).toMatchSnapshot();
  });
});
