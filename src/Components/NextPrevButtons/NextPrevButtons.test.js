import renderer from "react-test-renderer";
import NextPrevButtons from "./NextPrevButtons";

it("NextPrevButtons Snapshot", () => {
  const tree = renderer
    .create(
      <>
        <NextPrevButtons
          currentExerciseNumber={1}
          switchCurrentExerciseNumber="switchCurrentExerciseNumber"
          maxExerciseNumber={10}
          direction="next"
        />
        <NextPrevButtons
          currentExerciseNumber={1}
          switchCurrentExerciseNumber="switchCurrentExerciseNumber"
          maxExerciseNumber={10}
          direction="previous"
        />
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
