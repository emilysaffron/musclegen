/* eslint-disable array-callback-return */
import styled from "@emotion/styled";

const StyledHeading = styled.li`
  list-style: none;
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const getPastPlanHeading = (workoutPlan) => {
  let targetArea = "";
  let date = "";
  let keys = "";
  let exercise = workoutPlan[0];

  targetArea = exercise.bodyTarget;
  date = exercise.date;
  return (
    <StyledHeading key={keys}>
      {targetArea} - on {date}
    </StyledHeading>
  );
};

export default getPastPlanHeading;
