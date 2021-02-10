import styled from "@emotion/styled";

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

const getPastPlan = (workoutPlan, styled) => {
  return styled ? (
    <div>
      {Object.keys(workoutPlan).map((index) => {
        const exercise = workoutPlan[index];

        return (
          <div key={Math.random()}>
            <StyledItems key={Math.random()}>
              {exercise.name} for {exercise.reps} reps
            </StyledItems>
          </div>
        );
      })}
    </div>
  ) : (
    Object.keys(workoutPlan).map((index) => {
      const exercise = workoutPlan[index];
      let plan = exercise.name + " for " + exercise.reps + " reps ";
      return plan;
    })
  );
};

export default getPastPlan;
