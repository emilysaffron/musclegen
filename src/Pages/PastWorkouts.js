import { useState, useEffect, useContext } from "react";
import getPastPlan from "../Helpers/getPastPlan";
import styled from "@emotion/styled";
import getPastPlanHeading from "../Helpers/getPastPlanHeading";
import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import { Link } from "@reach/router";
import Firebase from "firebase";

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
  cursor: pointer;
  padding: 10px;
`;

const PastWorkouts = () => {
  const { setCurrentPlan } = useContext(CurrentPlanContext);

  const [pastWorkouts, updatePastWorkouts] = useState([]);
  const [dataIsFetched, updateDataIsFetched] = useState(false);
  const [response, updateResponse] = useState("");

  const getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", (snapshot) => {
      updateResponse(snapshot.val());
      updateDataIsFetched(true);
    });
  };

  useEffect(() => {
    getUserData();
    if (response) {
      updatePastWorkouts(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataIsFetched]);

  return (
    dataIsFetched && (
      <StyledPage>
        {pastWorkouts.length !== 0 ? (
          // Logic quite complicated, but maybe it has to be.
          // Let's add some fixture data, capturing locally what the db returns, and some tests for this function to see how it may be improved.
          // This will mean breaking the function out of the return and into its own named arrow function
          Object.keys(pastWorkouts).map((index) => {
            const workoutPlan = pastWorkouts[index];
            let exercise = workoutPlan[0];
            let urlRoute = exercise.bodyTarget;

            if (urlRoute === "UpperBody") {
              urlRoute = "upper-body";
            }
            if (urlRoute === "LowerBody") {
              urlRoute = "lower-body";
            }

            return (
              <StyledPlan key={Math.random()}>
                <div> {getPastPlanHeading(workoutPlan)}</div>
                <div>{getPastPlan(workoutPlan, true)}</div>
                <Buttons>
                  <Link to={`/new-workout/${urlRoute}`}>
                    <EditButton
                      onClick={() =>
                        setCurrentPlan(getPastPlan(workoutPlan, false))
                      }
                    >
                      Review and Begin
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
    )
  );
};

export default PastWorkouts;
