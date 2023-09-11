import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader", () => {
  // I feel like I made too many snapshot tests, so I just wanted to show that I know other things too!
  it("should display loading text", () => {
    render(<Loader />);
    const loadingText = screen.getByText("Loading...");

    expect(loadingText).toBeInTheDocument();
  });
});
