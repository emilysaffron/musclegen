import getUserData from "../Helpers/getUserData";
import { useState, useEffect } from "react";
import getPastPlan from "../Helpers/getPastPlan";
import styled from "@emotion/styled";
import getPastPlanLabel from "../Helpers/getPastPlanLabel";
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
const PastWorkouts = () => {
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
      {pastWorkouts.length > 0 ? (
        Object.keys(pastWorkouts).map((key) => {
          const value = pastWorkouts[key];

          // eslint-disable-next-line array-callback-return

          return (
            <StyledPlan key={key + 2}>
              <div> {getPastPlanLabel(value)}</div>
              <div>{getPastPlan(value)}</div>
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
