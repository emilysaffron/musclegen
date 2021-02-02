import renderer from "react-test-renderer";
import Menu from "./Menu";

it("Menu Snapshot", () => {
  const tree = renderer.create(<Menu labels={[]} dropdown={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
