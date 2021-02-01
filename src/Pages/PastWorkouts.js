import getUserData from "../Helpers/getUserData";
import { useState, useEffect } from "react";
import getPastPlan from "../Helpers/getPastPlan";
import styled from "@emotion/styled";
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const PastWorkouts = () => {
  const [pastWorkouts, updatePastWorkouts] = useState([]);
  const [fetched, dataIsFetched] = useState(false);
  useEffect(() => {
    const response = getUserData(dataIsFetched);
    if (response) {
      updatePastWorkouts(response);
      console.log("HI " + pastWorkouts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched]);

  return fetched ? (
    <StyledPage>
      {Object.keys(pastWorkouts).map((key) => {
        const value = pastWorkouts[key];

        // eslint-disable-next-line array-callback-return

        return getPastPlan(value);
      })}
    </StyledPage>
  ) : (
    <StyledPage>loading...</StyledPage>
  );
};

export default PastWorkouts;
