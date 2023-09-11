import renderer from "react-test-renderer";
import Body from "./Body";
import { render, screen } from "@testing-library/react";

describe("Body", () => {
  it("should match the snapshot with correctly provided array of html elements", () => {
    const body = renderer.create(
      <Body
        bodyElements={[
          "<h2>This is a sub-heading</h2>",
          "<p>This is a paragraph!</p>",
        ]}
      />
    );

    expect(body).toMatchSnapshot();
  });

  it("should render information if bodyElements ARRAY is empty", () => {
    render(<Body bodyElements={[]} />);
    const information = screen.getByText(
      "Sorry, we couldn't load this article. Please try again later."
    );

    expect(information).toBeInTheDocument();
  });

  it("should render information if bodyElements is an empty STRING", () => {
    render(<Body bodyElements="" />);
    const information = screen.getByText(
      "Sorry, we couldn't load this article. Please try again later."
    );

    expect(information).toBeInTheDocument();
  });

  it("should render information if bodyElements is an not provided AT ALL", () => {
    render(<Body />);
    const information = screen.getByText(
      "Sorry, we couldn't load this article. Please try again later."
    );

    expect(information).toBeInTheDocument();
  });
});
