import styled from "@emotion/styled";
import AddExercise from "../Helpers/AddExercise";
const StyledButton = styled.button`
  border-radius: 20px;
  width: 150px;
  height: 90px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  outline: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Confirmation = ({
  repNumber,
  exercise,
  modal,
  toggleModal,
  AddToWorkoutPlan,
  workoutPlan,
}) => {
  const handleCancelClick = () => {
    toggleModal(!modal);
  };
  const handleConfirmClick = () => {
    AddExercise(exercise, repNumber, AddToWorkoutPlan, workoutPlan);

    toggleModal(!modal);
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
