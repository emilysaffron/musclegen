import renderer from "react-test-renderer";
import FilterModal from "./FilterModal";

it("FilterModal Snapshot", () => {
  const tree = renderer
    .create(<FilterModal filterExercises="filterExercises" half="half" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
