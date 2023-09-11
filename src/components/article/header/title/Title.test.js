import renderer from "react-test-renderer";
import Title from "./Title";

describe("Title", () => {
  it("should match the snapshot", () => {
    const title = renderer.create(<Title text="This is a text!" />);

    expect(title).toMatchSnapshot();
  });
});
