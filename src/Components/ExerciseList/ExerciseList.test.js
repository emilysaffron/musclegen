import renderer from "react-test-renderer";
import ExerciseList from "./ExerciseList";

it("ExerciseList Snapshot", () => {
  const tree = renderer
    .create(
      <ExerciseList
        exercises=""
        toggleModal="toggleModal"
        modal={true}
        updateChosenExercise="updateChosenExercise"
        half=""
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
