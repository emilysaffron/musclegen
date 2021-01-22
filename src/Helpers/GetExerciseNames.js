import Exercise from "../Components/Exercise";

const GetExerciseNames = (
  exercises,
  toggleModal,
  modal,
  updateChosenExercise,
  chosenExercise
) => {
  let names = [];

  for (let i = 0; i < exercises.length; i++) {
    names.push(
      <Exercise
        name={exercises[i].model.name}
        target={exercises[i].model.target}
        toggleModal={toggleModal}
        modal={modal}
        updateChosenExercise={updateChosenExercise}
      />
    );
  }

  return names;
};

export default GetExerciseNames;
