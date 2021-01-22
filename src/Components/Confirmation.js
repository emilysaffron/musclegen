import styled from "@emotion/styled";
import ToggleModal from "../Helpers/ToggleModal";
import AddExercise from "../Helpers/AddExercise";
const StyledButton = styled.button`
  border-radius: 20px;
  width: 150px;
  height: 90px;
  padding: 20px;
  margin: 10px;
  font-family: Palatino, URW Palladio L, serif;
  color: black;
  &:hover {
    cursor: pointer;
  }
  outline: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Confirmation = ({
  choice,
  repNumber,
  exercise,
  modal,
  toggleModal,
  AddToWorkoutPlan,
  workoutPlan,
}) => {
  const handleCancelClick = () => {
    ToggleModal(toggleModal, modal);
  };
  const handleConfirmClick = () => {
    AddExercise(exercise, repNumber, AddToWorkoutPlan, workoutPlan);
    ToggleModal(toggleModal, modal);
  };

  return (
    <ButtonsContainer>
      <StyledButton onClick={() => handleConfirmClick()}>
        add to plan
      </StyledButton>
      <StyledButton onClick={() => handleCancelClick()}>cancel</StyledButton>
    </ButtonsContainer>
  );
};

export default Confirmation;
