import styled from "@emotion/styled";
import RepCounter from "../RepCounter/RepCounter";
import Confirmation from "../Confirmation/Confirmation";
import { useState } from "react";
const StyledModal = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  @media (min-width: 400px) {
    position: fixed;
  }
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 400px) {
    width: 100%;
    position: sticky;
    top: 1rem;
  }
`;

const ExerciseModal = ({
  modal,
  exercise,
  toggleModal,
  AddToWorkoutPlan,
  workoutPlan,
  currentRepNumber,
}) => {
  const [repNumber, updateRepNumber] = useState(currentRepNumber);

  return modal ? (
    <StyledModal>
      {exercise}
      <RepCounter repNumber={repNumber} updateRepNumber={updateRepNumber} />
      <Confirmation
        repNumber={repNumber}
        exercise={exercise}
        modal={modal}
        toggleModal={toggleModal}
        AddToWorkoutPlan={AddToWorkoutPlan}
        workoutPlan={workoutPlan}
      />
    </StyledModal>
  ) : null;
};
export default ExerciseModal;
