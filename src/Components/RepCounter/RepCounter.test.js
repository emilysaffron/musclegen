import renderer from "react-test-renderer";
import RepCounter from "./RepCounter";

it("RepCounter Snapshot", () => {
  const tree = renderer
    .create(<RepCounter repNumber={1} updateRepNumber="updateRepNumber" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
