/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from "react";
import { CurrentPlanContext } from "../../Helpers/CurrentPlanContext";
import setWorkoutPlan from "../../Helpers/SetWorkoutPlan";
import styled from "@emotion/styled";
import StartStopButton from "../StartStopButton/StartStopButton";
import EditExerciseModal from "../EditExerciseModal/EditExerciseModal";
import ExerciseModal from "../ExerciseModal/ExerciseModal";
const StyledPlan = styled.ul`
  background: #cea8bb;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5px;
  margin-left: 50px;
  align-items: center;
  border-radius: 20px;
  width: 385px;
  height: max-content;
  border: 2px solid black;
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
`;

const StyledItems = styled.li`
  list-style: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #b090a0;
  }
`;
const StyledHeading = styled.li`
  list-style: none;
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const WorkoutPlan = ({
  label,
  workoutPlan,
  AddToWorkoutPlan,
  CurrentItem,
  SelectExercise,
  ToggleEdit,
  edit,
  updateItems,
  items,
}) => {
  const { currentPlan, setCurrentPlan } = useContext(CurrentPlanContext);
  const Edit = (item) => {
    CurrentItem(item);
    let words = item.split(" ");
    let name = "";
    let indexOfFor = words.indexOf("for");
    for (let i = 0; i < indexOfFor; i++) {
      name = name + " " + words[i];
    }

    SelectExercise(name);

    ToggleEdit(!edit);
  };

  useEffect(() => {
    updateItems(
      workoutPlan.map((item) => {
        if (item !== "") {
          return (
            <StyledItems key={item} onClick={() => Edit(item)}>
              {item}
            </StyledItems>
          );
        }
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workoutPlan, edit]);

  return (
    <StyledPlan>
      <StyledHeading>{label} Plan</StyledHeading>

      {items}

      <StartStopButton
        control="start"
        label={label}
        onClick={() =>
          setWorkoutPlan(workoutPlan, { currentPlan, setCurrentPlan })
        }
      />
    </StyledPlan>
  );
};

export default WorkoutPlan;
