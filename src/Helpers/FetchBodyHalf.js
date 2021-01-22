import FetchExercises from "./FetchExercises";

const FetchBodyHalf = (half) => {
  let filteredExercises = [];
  const exercises = FetchExercises();

  for (let i = 0; i < exercises.length; i++) {
    let exercise = exercises[i];
    if (exercise.type === half) {
      filteredExercises.push(exercise);
    }
  }

  return filteredExercises;
};

export default FetchBodyHalf;
