import renderer from "react-test-renderer";
import ExerciseModal from "./ExerciseModal";

it("ExerciseModal Snapshot", () => {
  const tree = renderer
    .create(
      <ExerciseModal
        modal={true}
        exercise=""
        toggleModal="toggleModal"
        AddToWorkoutPlan="AddToWorkoutPlan"
        workoutPlan="workoutPlan"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
