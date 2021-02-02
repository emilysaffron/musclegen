import renderer from "react-test-renderer";
import CompletedModal from "./CompletedModal";

it("CompletedModal Snapshot", () => {
  const tree = renderer
    .create(
      <CompletedModal modal={true} toggleModal="toggleModal" currentPlan={[]} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
