import renderer from "react-test-renderer";
import NotLoaded from "./NotLoaded";

describe("NotLoaded", () => {
  it("should match the snapshot", () => {
    const notLoaded = renderer.create(<NotLoaded />);

    expect(notLoaded).toMatchSnapshot();
  });
});
