import renderer from "react-test-renderer";
import Confirmation from "./Confirmation";

it("Confirmation Snapshot", () => {
  const tree = renderer
    .create(
      <Confirmation
        repNumber={0}
        exercise={""}
        modal={true}
        toggleModal="toggleModal"
        AddToWorkoutPlan="AddToWorkoutPlan"
        workoutPlan=""
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
