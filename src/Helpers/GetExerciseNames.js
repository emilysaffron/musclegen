/* eslint-disable array-callback-return */
import Exercise from "../Components/Exercise/Exercise";

const GetExerciseNames = (
  exercises,
  toggleModal,
  modal,
  updateChosenExercise,
  filter
) => {
  let names = [];

  Object.keys(exercises).map((key) => {
    const item = exercises[key];
    if (!filter) {
      names.push(
        <Exercise
          key={Math.random()}
          name={item.model.name}
          target={item.model.target}
          toggleModal={toggleModal}
          modal={modal}
          updateChosenExercise={updateChosenExercise}
        />
      );
    }
    if (filter === item.model.target) {
      names.push(
        <Exercise
          key={Math.random()}
          name={item.model.name}
          target={item.model.target}
          toggleModal={toggleModal}
          modal={modal}
          updateChosenExercise={updateChosenExercise}
        />
      );
    }
  });

  return names;
};

export default GetExerciseNames;
