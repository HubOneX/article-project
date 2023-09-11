import renderer from "react-test-renderer";
import ArticleInfo from "./ArticleInfo";
import { render, screen } from "@testing-library/react";

describe("ArticleInfo", () => {
  it("should match the snapshot", () => {
    const articleInfo = renderer.create(
      <ArticleInfo date="2020-09-03T07:27:59.490" author="Author" />
    );

    expect(articleInfo).toMatchSnapshot();
  });

  it("should render 'Anonymous' if athor is not provided", () => {
    render(<ArticleInfo date="2020-09-03T07:27:59.490" author={""} />);
    const anonymousAuthor = screen.getByText("Anonymous");

    expect(anonymousAuthor).toBeInTheDocument();
  });
});
