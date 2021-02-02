import renderer from "react-test-renderer";
import DropdownNav from "./DropdownNav";

it("DropdownNav Snapshot", () => {
  const tree = renderer.create(<DropdownNav />).toJSON();
  expect(tree).toMatchSnapshot();
});
