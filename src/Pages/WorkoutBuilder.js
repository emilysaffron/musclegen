import FetchBodyHalf from "../Helpers/FetchBodyHalf/FetchBodyHalf";
import ExerciseModal from "../Components/ExerciseModal/ExerciseModal";
import ConvertLabel from "../Helpers/ConvertLabel/ConvertLabel";
import ExerciseList from "../Components/ExerciseList/ExerciseList";
import WorkoutPlan from "../Components/WorkoutPlan/WorkoutPlan";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import EditExerciseModal from "../Components/EditExerciseModal/EditExerciseModal";
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

const WorkoutBuilder = ({ label }) => {
  const half = ConvertLabel(label);
  const [filteredExercises, fetchFilteredExercises] = useState("");
  const [modal, toggleModal] = useState(false);
  const [chosenExercise, updateChosenExercise] = useState("");
  const [workoutPlan, AddToWorkoutPlan] = useState(["", ""]);
  const [edit, ToggleEdit] = useState(false);
  const [Exercise, SelectExercise] = useState("");
  const [Item, CurrentItem] = useState("");
  const [items, updateItems] = useState("");

  useEffect(() => {
    fetchFilteredExercises(FetchBodyHalf(half));
  }, [half]);

  return (
    <StyledPage>
      <ExerciseList
        exercises={filteredExercises}
        toggleModal={toggleModal}
        modal={modal}
        updateChosenExercise={updateChosenExercise}
        half={half}
      />
      <EditExerciseModal
        modal={edit}
        exercise={Exercise}
        Item={Item}
        toggleModal={ToggleEdit}
        toggleShowExerciseModal={toggleModal}
        showExerciseModal={modal}
        AddToWorkoutPlan={AddToWorkoutPlan}
        workoutPlan={workoutPlan}
        updateItems={updateItems}
      />

      <ExerciseModal
        modal={modal}
        exercise={chosenExercise}
        toggleModal={toggleModal}
        AddToWorkoutPlan={AddToWorkoutPlan}
        workoutPlan={workoutPlan}
        currentRepNumber={0}
      />

      <WorkoutPlan
        label={label}
        workoutPlan={workoutPlan}
        AddToWorkoutPlan={AddToWorkoutPlan}
        CurrentItem={CurrentItem}
        SelectExercise={SelectExercise}
        ToggleEdit={ToggleEdit}
        edit={edit}
        updateItems={updateItems}
        items={items}
      />
    </StyledPage>
  );
};
export default WorkoutBuilder;
