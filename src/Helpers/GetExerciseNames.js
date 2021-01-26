import Exercise from "../Components/Exercise";

const GetExerciseNames = (
  exercises,
  toggleModal,
  modal,
  updateChosenExercise
) => {
  let names = [];

  for (let i = 0; i < exercises.length; i++) {
    names.push(
      <Exercise
        key={i}
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
