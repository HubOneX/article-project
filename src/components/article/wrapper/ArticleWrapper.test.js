import renderer from "react-test-renderer";
import ArticleWrapper from "./ArticleWrapper";

describe("ArticleWrapper", () => {
  it("should match the snapshot", () => {
    const wrapper = renderer.create(
      <ArticleWrapper>
        <h1>Element</h1>
      </ArticleWrapper>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
