import getUserData from "../Helpers/getUserData";
import { useState, useEffect, useContext } from "react";
import getPastPlan from "../Helpers/getPastPlan";
import styled from "@emotion/styled";
import getPastPlanLabel from "../Helpers/getPastPlanLabel";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import StartStopButton from "../Components/StartStopButton/StartStopButton";
import { Link } from "@reach/router";

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

const Buttons = styled.div`
  display: flex;
`;

const EditButton = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 5px;
`;

const PastWorkouts = ({ label }) => {
  const { setCurrentPlan } = useContext(CurrentPlanContext);

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
          let label = getPastPlanLabel(value, false);

          if (label === "UpperBody") {
            label = "upper-body";
          }
          if (label === "LowerBody") {
            label = "lower-body";
          }

          return (
            <StyledPlan key={key + 2}>
              <div> {getPastPlanLabel(value, true)}</div>
              <div>{getPastPlan(value, true)}</div>
              <Buttons>
                <StartStopButton
                  control="start"
                  label={label}
                  onClick={() => setCurrentPlan(getPastPlan(value, false))}
                />
                <Link to={`/new-workout/${label}`}>
                  <EditButton
                    onClick={() => setCurrentPlan(getPastPlan(value, false))}
                  >
                    Edit
                  </EditButton>
                </Link>
              </Buttons>
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
