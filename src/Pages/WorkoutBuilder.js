import FetchBodyHalf from "../Helpers/FetchBodyHalf/FetchBodyHalf";
import ConvertBodyTarget from "../Helpers/ConvertBodyTarget/ConvertBodyTarget";
import ExerciseModal from "../Components/ExerciseModal/ExerciseModal";
import ExerciseList from "../Components/ExerciseList/ExerciseList";
import WorkoutPlan from "../Components/WorkoutPlan/WorkoutPlan";
import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import EditExerciseModal from "../Components/EditExerciseModal/EditExerciseModal";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  @media (max-width: 400px) {
    flex-direction: column-reverse;
  }
`;

const WorkoutBuilder = ({ bodyTarget }) => {
  const { currentPlan } = useContext(CurrentPlanContext);
  const half = ConvertBodyTarget(bodyTarget);
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
    if (currentPlan) {
      AddToWorkoutPlan(currentPlan);
    }
  }, [currentPlan, half]);

  return (
    <StyledPage>
      <ExerciseList
        exercises={filteredExercises}
        toggleModal={toggleModal}
        modal={modal}
        updateChosenExercise={updateChosenExercise}
        half={half}
      />

      <WorkoutPlan
        bodyTarget={bodyTarget}
        workoutPlan={workoutPlan}
        AddToWorkoutPlan={AddToWorkoutPlan}
        CurrentItem={CurrentItem}
        SelectExercise={SelectExercise}
        ToggleEdit={ToggleEdit}
        edit={edit}
        updateItems={updateItems}
        items={items}
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
    </StyledPage>
  );
};
export default WorkoutBuilder;
