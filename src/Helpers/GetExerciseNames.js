import Exercise from "../Components/Exercise/Exercise";

const GetExerciseNames = (
  exercises,
  toggleModal,
  modal,
  updateChosenExercise,
  filter
) => {
  let names = [];

  for (let i = 0; i < exercises.length; i++) {
    if (!filter) {
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
    if (filter === exercises[i].model.target) {
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
  }

  return names;
};

export default GetExerciseNames;
