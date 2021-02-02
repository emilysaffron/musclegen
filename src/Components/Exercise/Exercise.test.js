import renderer from "react-test-renderer";
import Exercise from "./Exercise";

it("Exercise Snapshot", () => {
  const tree = renderer
    .create(
      <Exercise
        name=""
        target=""
        toggleModal="toggleModal"
        modal={true}
        updateChosenExercise="updateChosenExercise"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
