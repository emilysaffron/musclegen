import styled from "@emotion/styled";

const StyledModal = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledButton = styled.button`
  border-radius: 20px;
  width: 150px;
  height: 90px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  outline: none;
`;
const StyledCancelButton = styled.button`
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  background: #cea8bb;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const EditExerciseModal = ({
  modal,
  exercise,
  Item,
  toggleModal,
  toggleShowExerciseModal,
  showExerciseModal,
  AddToWorkoutPlan,
  workoutPlan,
  updateItems,
}) => {
  const clicked = (edit) => {
    let index = workoutPlan.indexOf(Item);
    var items = workoutPlan;

    if (index !== -1) {
      items.splice(index, 1);
      AddToWorkoutPlan(items);
    }
    AddToWorkoutPlan(items);
    updateItems(items);
    toggleModal(!modal);
    if (edit) {
      toggleShowExerciseModal(!showExerciseModal);
    }
  };
  return modal ? (
    <StyledModal>
      {exercise}
      <ButtonsContainer>
        <StyledButton onClick={() => clicked(false)}>Remove</StyledButton>
        <StyledButton onClick={() => clicked(true)}>Edit</StyledButton>
      </ButtonsContainer>
      <StyledCancelButton onClick={() => toggleModal(!modal)}>
        Cancel
      </StyledCancelButton>
    </StyledModal>
  ) : null;
};
export default EditExerciseModal;
