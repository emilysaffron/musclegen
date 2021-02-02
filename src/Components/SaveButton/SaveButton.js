import styled from "@emotion/styled";
import WriteUserData from "../../Helpers/WriteUserData";
import { Link } from "@reach/router";
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

const SaveButton = ({ modal, toggleModal, currentPlan }) => {
  const handleCancelClick = () => {
    toggleModal(!modal);
  };
  const handleConfirmClick = () => {
    WriteUserData(currentPlan);
    toggleModal(modal);
  };

  return (
    <Link to={"/"}>
      <ButtonsContainer>
        <StyledButton onClick={() => handleConfirmClick()}>
          Save Workout
        </StyledButton>
        <StyledButton onClick={() => handleCancelClick()}>
          Don't Save
        </StyledButton>
      </ButtonsContainer>
    </Link>
  );
};

export default SaveButton;
