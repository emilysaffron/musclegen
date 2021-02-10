import renderer from "react-test-renderer";
import MenuButton from "./MenuButton";

it("MenuButton Snapshot", () => {
  const tree = renderer
    .create(<MenuButton option="option" dropdown={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
