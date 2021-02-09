import getUserData from "../Helpers/getUserData";
import { useState, useEffect, useContext } from "react";
import getPastPlan from "../Helpers/getPastPlan";
import styled from "@emotion/styled";
import getPastPlanLabel from "../Helpers/getPastPlanLabel";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import StartStopButton from "../Components/StartStopButton/StartStopButton";
import setWorkoutPlan from "../Helpers/SetWorkoutPlan";
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

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

const PastWorkouts = ({ label }) => {
  const { currentPlan, setCurrentPlan } = useContext(CurrentPlanContext);

  const [pastWorkouts, updatePastWorkouts] = useState([]);
  const [fetched, dataIsFetched] = useState(false);
  useEffect(() => {
    const response = getUserData(dataIsFetched);
    if (response) {
      updatePastWorkouts(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);

  return fetched ? (
    <StyledPage>
      {pastWorkouts.length !== 0 ? (
        Object.keys(pastWorkouts).map((key) => {
          const value = pastWorkouts[key];
          console.log(getPastPlanLabel(value, false));
          console.log(value);
          // eslint-disable-next-line array-callback-return

          return (
            <StyledPlan key={key + 2}>
              <div> {getPastPlanLabel(value, true)}</div>
              <div>{getPastPlan(value, true)}</div>
              <StartStopButton
                control="start"
                label={label}
                onClick={() => setCurrentPlan(getPastPlan(value, false))}
              />
            </StyledPlan>
          );
        })
      ) : (
        <>No Workouts Recorded</>
      )}
    </StyledPage>
  ) : (
    <StyledPage>loading...</StyledPage>
  );
};

export default PastWorkouts;
