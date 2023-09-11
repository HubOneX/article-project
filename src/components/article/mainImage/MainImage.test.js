import { render, screen } from "@testing-library/react";
import MainImage from "./MainImage";

describe("MainImage", () => {
  it("should render image with correct alt text and source", () => {
    render(<MainImage image={{ url: "url", caption: "alt" }} />);
    const image = screen.getByAltText("alt");

    expect(image.src).toContain("url");
  });

  it("should not render image if url is not provided", () => {
    render(<MainImage image={{ url: "", caption: "alt" }} />);
    const image = screen.queryByAltText("alt");

    expect(image).not.toBeInTheDocument();
  });
});
