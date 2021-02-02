import FetchBodyHalf from "../Helpers/FetchBodyHalf";
import ExerciseModal from "../Components/ExerciseModal/ExerciseModal";
import ConvertLabel from "../Helpers/ConvertLabel";
import ExerciseList from "../Components/ExerciseList/ExerciseList";
import WorkoutPlan from "../Components/WorkoutPlan/WorkoutPlan";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
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

      <ExerciseModal
        modal={modal}
        exercise={chosenExercise}
        toggleModal={toggleModal}
        AddToWorkoutPlan={AddToWorkoutPlan}
        workoutPlan={workoutPlan}
      />

      <WorkoutPlan label={label} workoutPlan={workoutPlan} />
    </StyledPage>
  );
};
export default WorkoutBuilder;
