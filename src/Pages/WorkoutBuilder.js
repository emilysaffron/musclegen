import FetchBodyHalf from "../Helpers/FetchBodyHalf";
import ConvertLabel from "../Helpers/ConvertLabel";
import ExerciseList from "../Components/ExerciseList";
const WorkoutBuilder = ({ label }) => {
  const half = ConvertLabel(label);

  const filteredExercises = FetchBodyHalf(half);

  return <ExerciseList exercises={filteredExercises} />;
};
export default WorkoutBuilder;
