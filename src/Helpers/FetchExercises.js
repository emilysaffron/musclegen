const FetchExercises = () => {
  let data = require("../Data/exercises.json");
  let exercises = data.body;

  return exercises;
};

export default FetchExercises;
