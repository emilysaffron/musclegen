import styled from "@emotion/styled";
import ToggleModal from "../Helpers/ToggleModal";
import WriteUserData from "../Helpers/WriteUserData";
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

const SaveButton = ({ modal, toggleModal, currentPlan }) => {
  const handleCancelClick = () => {
    ToggleModal(toggleModal, modal);
  };
  const handleConfirmClick = () => {
    WriteUserData(currentPlan);
    ToggleModal(toggleModal, modal);
  };

  return (
    <ButtonsContainer>
      <StyledButton onClick={() => handleConfirmClick()}>
        Save Workout
      </StyledButton>
      <StyledButton onClick={() => handleCancelClick()}>
        Don't Save
      </StyledButton>
    </ButtonsContainer>
  );
};

export default SaveButton;
