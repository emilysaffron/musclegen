/* eslint-disable array-callback-return */
import FetchBodyHalf from "./FetchBodyHalf";
const getExerciseTargets = (filterExercises, half) => {
  let exercises = FetchBodyHalf(half);
  let labelsSoFar = [];
  return exercises.map((item) => {
    let label = item.model.target;
    if (labelsSoFar.indexOf(label) === -1) {
      labelsSoFar.push(label);
      return <button onClick={() => filterExercises(label)}>{label}</button>;
    }
  });
};

export default getExerciseTargets;
