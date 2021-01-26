/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import setWorkoutPlan from "../Helpers/SetWorkoutPlan";
import styled from "@emotion/styled";

import StartStopButton from "./StartStopButton";

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
`;
const StyledHeading = styled.li`
  list-style: none;
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const WorkoutPlan = ({ label, workoutPlan }) => {
  const { currentPlan, setCurrentPlan } = useContext(CurrentPlanContext);
  let id = 0;
  return (
    <div>
      <StyledPlan>
        <StyledHeading>{label} Plan</StyledHeading>
        {workoutPlan.map((item) => {
          if (item !== "") {
            return <StyledItems key={id + 1}>{item}</StyledItems>;
          }
        })}

        <StartStopButton
          control="start"
          label={label}
          onClick={() =>
            setWorkoutPlan(workoutPlan, { currentPlan, setCurrentPlan })
          }
        />
      </StyledPlan>
    </div>
  );
};

export default WorkoutPlan;
