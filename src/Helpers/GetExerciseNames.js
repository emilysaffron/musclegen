import Exercise from "../Components/Exercise";

const GetExerciseNames = (exercises) => {
  let names = [];

  for (let i = 0; i < exercises.length; i++) {
    names.push(
      <Exercise
        name={exercises[i].model.name}
        target={exercises[i].model.target}
      />
    );
  }

  console.log("HERE " + names);
  return names;
};

export default GetExerciseNames;
