import { CurrentPlanContext } from "../Helpers/CurrentPlanContext";
import MakeObjects from "../Helpers/MakeObjects";
import { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import NextPrevButtons from "../Components/NextPrevButtons/NextPrevButtons";
import quit from "../quit.png";
import React from "react";
import { Link } from "@reach/router";
import CompletedModal from "../Components/CompletedModal/CompletedModal";
import tick from "../tick.png";
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
  align-items: center;
`;

const Quit = styled.div`
  width: 40px;
  align-self: baseline;
  cursor: pointer;
  text-decoration: none;
`;
const Names = styled.div`
  margin: auto;
`;

const FinishedButton = styled.img`
  border-radius: 50%;
  background-color: #b2fba5;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Workout = ({ bodyTarget }) => {
  const bodyTargetWithoutWhitespace = bodyTarget.replace(/\s+/g, "-");
  const { currentPlan, setCurrentPlan } = useContext(CurrentPlanContext);
  const [currentExerciseNumber, switchCurrentExerciseNumber] = useState(0);
  const [maxExerciseNumber, updateMaxExerciseNumber] = useState(0);
  const [filledPlan, updateFilledPlan] = useState(false);
  const [completedModal, toggleCompletedModal] = useState(false);
  const [quitCurrentWorkout, toggleQuitCurrentWorkout] = useState(false);
  useEffect(() => {
    if (currentPlan) {
      console.log(currentPlan);
      setCurrentPlan(
        MakeObjects(
          currentPlan,
          updateMaxExerciseNumber,
          updateFilledPlan,
          bodyTarget
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const quitWorkout = () => {
    toggleQuitCurrentWorkout(!quitCurrentWorkout);
    setCurrentPlan(null);
  };

  return filledPlan && !quitCurrentWorkout ? (
    <StyledPage>
      <Display>
        <Quit onClick={() => quitWorkout()}>
          <Link to={`/`}>
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
      <CompletedModal
        modal={completedModal}
        toggleModal={toggleCompletedModal}
        currentPlan={currentPlan}
        toggleQuitCurrentWorkout={toggleQuitCurrentWorkout}
      />
      <FinishedButton
        onClick={() => toggleCompletedModal(!completedModal)}
        src={tick}
        alt="finish"
      />
    </StyledPage>
  ) : (
    <StyledPage>
      <Display>
        <Quit>
          <Link to={`${bodyTargetWithoutWhitespace.toLowerCase()}`}>
            <img width="40px" src={quit} alt="quit" />
          </Link>
        </Quit>
        <Names>Add Exercises To Plan</Names>
      </Display>
    </StyledPage>
  );
};

export default Workout;
