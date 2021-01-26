import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import MakeObjects from "../Helpers/MakeObjects";
import { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import NextPrevButtons from "../Components/NextPrevButtons";
import quit from "../quit.png";
import React from "react";
import { Link } from "@reach/router";

const Display = styled.div`
  background: #a8bbce;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
  flex-wrap: wrap;
  padding: 5px;
  align-items: center;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  width: 100px
  border: 2px solid black;


`;
const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const StyledPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Quit = styled.div`
  width: 40px;
  align-self: baseline;
  &:hover {
    cursor: pointer;
  }
`;
const Names = styled.div`
  margin: auto;
`;

const Workout = ({ label }) => {
  const labelWithoutWhitespace = label.replace(/\s+/g, "-");
  const { currentPlan, setCurrentPlan } = useContext(CurrentPlanContext);
  const [currentExerciseNumber, switchCurrentExerciseNumber] = useState(0);
  const [maxExerciseNumber, updateMaxExerciseNumber] = useState(0);
  const [filledPlan, updateFilledPlan] = useState(false);
  useEffect(() => {
    if (currentPlan) {
      setCurrentPlan(
        MakeObjects(currentPlan, updateMaxExerciseNumber, updateFilledPlan)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return filledPlan ? (
    <StyledPage>
      <Display>
        <Quit>
          <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
            <img width="40px" src={quit} alt="quit" />
          </Link>
        </Quit>
        <Names>
          <h1> {currentPlan[currentExerciseNumber].name}</h1>
          <h2>{currentPlan[currentExerciseNumber].reps} Reps</h2>
        </Names>
      </Display>
      <StyledButtons>
        <NextPrevButtons
          currentExerciseNumber={currentExerciseNumber}
          switchCurrentExerciseNumber={switchCurrentExerciseNumber}
          maxExerciseNumber={maxExerciseNumber}
          direction="previous"
        />
        <NextPrevButtons
          currentExerciseNumber={currentExerciseNumber}
          switchCurrentExerciseNumber={switchCurrentExerciseNumber}
          maxExerciseNumber={maxExerciseNumber}
          direction="next"
        />
      </StyledButtons>
    </StyledPage>
  ) : (
    <StyledPage>
      <Display>
        <Quit>
          <Link to={`${labelWithoutWhitespace.toLowerCase()}`}>
            <img width="40px" src={quit} alt="quit" />
          </Link>
        </Quit>
        <Names>Add Exercises To Plan</Names>
      </Display>
    </StyledPage>
  );
};

export default Workout;
