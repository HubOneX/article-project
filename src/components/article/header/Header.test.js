import renderer from "react-test-renderer";
import Header from "./Header";

describe("Header", () => {
  it("should match the snapshot", () => {
    const header = renderer.create(
      <Header
        heading="Heading!"
        publicationDate="2020-09-03T07:27:59.490Z"
        author="Test Name"
      />
    );

    expect(header).toMatchSnapshot();
  });
});
