import renderer from "react-test-renderer";
import SaveButton from "./SaveButton";

it("SaveButton Snapshot", () => {
  const tree = renderer
    .create(
      <SaveButton modal={true} toggleModal="toggleModal" currentPlan={[]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
