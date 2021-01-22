/* eslint-disable array-callback-return */
import styled from "@emotion/styled";

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
const StyledHeading = styled.th`
  align-items: center;
  text-decoration: underline;
  padding: 15px;
`;

const WorkoutPlan = ({ label, workoutPlan }) => {
  return (
    <StyledPlan>
      <StyledHeading>{label} Plan</StyledHeading>

      {workoutPlan.map((item) => {
        if (item !== "") {
          return <StyledItems>{item}</StyledItems>;
        }
      })}
    </StyledPlan>
  );
};

export default WorkoutPlan;
